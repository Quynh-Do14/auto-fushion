import axios from 'axios';
import Cookies from 'js-cookie';
import { notification } from 'antd';
import { ROUTE_PATH } from '../common/appRouter';
import { Endpoint } from '../common/apiLink';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000,
    // withCredentials: true,
});

// Hàm lấy token từ cookie
const getToken = () => {
    const token = Cookies.get('token');
    return token ? JSON.parse(token) : null;
};

// Biến để tránh refresh token đồng thời từ nhiều request
let isRefreshing = false;
let failedQueue: any[] = [];

// Hàm xử lý hàng đợi các request khi refresh token
const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });
    failedQueue = [];
};

// Interceptor xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token?.accessToken) {
            config.headers.Authorization = `Bearer ${token.accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor xử lý phản hồi từ server
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Kiểm tra nếu token hết hạn và chưa được retry
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const token = getToken();

                    const response = await axios.post(`${baseURL}${Endpoint.Auth.RefreshToken}`, {
                        refreshToken: token?.refreshToken,
                    });

                    if (!response) {
                        throw new Error('Refresh token failed');
                    }

                    const { refreshToken, accessToken } = response.data;

                    // Lưu token mới vào cookie
                    Cookies.set('token', JSON.stringify({ refreshToken, accessToken }), {
                        path: '/',
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'Strict',
                        expires: 7,
                    });

                    processQueue(null, accessToken);
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosInstance(originalRequest);
                } catch (error) {
                    processQueue(error, null);
                    Cookies.remove('token');
                    notification.error({
                        message: 'Thông báo',
                        description: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
                    });
                    window.location.href = ROUTE_PATH.LOGIN;
                    return Promise.reject(error);
                } finally {
                    isRefreshing = false;
                }
            }

            // Thêm request vào hàng đợi nếu đang refresh token
            return new Promise((resolve, reject) => {
                failedQueue.push({
                    resolve: (token: string) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(axiosInstance(originalRequest));
                    },
                    reject: (err: any) => {
                        reject(err);
                    },
                });
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
