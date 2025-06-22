import dayjs from "dayjs";
import moment from "moment";
import slugify from "slugify";
const baseURL = process.env.NEXT_PUBLIC_API_URL
export const validateFields = (isImplicitChange = false, key: any, isCheck: any, setError: Function, error: any, message: string) => {
    if (isImplicitChange) {
        error[key] = {
            isError: isCheck,
            message: message,
        };
    }
    else {
        setError({
            ...error,
            [key]: {
                isError: isCheck,
                message: message,
            }
        });
    }
};

export const configImageURL = (image: string) => {
    if (image) {
        return `${baseURL}${image}`
    }
    return ""
}

export const configImageURLSplit = (image: string) => {
    if (image) {
        const baseURLFile = `${baseURL}`
        const result = image.split(baseURLFile)[1];
        return result
    }
    return ""
}

export const convertStringToBoolean = (value: string) => {
    const booleanValue = value === 'true'; // Chuyển chuỗi 'true' và 'false' về boolean
    return booleanValue
};

export const convertDate = (date: any) => {
    if (date) {
        let dateFormat = new Date(date);
        return moment(dateFormat).format("YYYY-MM-DD hh:mm:ss");
    } return null;

};
export const convertDateShow = (date: any) => {
    if (date) {
        let dateFormat = new Date(date);
        return moment(dateFormat).format("hh:mm:ss DD-MM-YYYY");
    } return null;

};

export const convertDateOnlyShow = (date: any) => {
    if (date) {
        let dateFormat = new Date(date);
        return moment(dateFormat).format("DD-MM-YYYY");
    } return null;

};

export const convertDateOnly = (date: any) => {
    if (date) {
        let dateFormat = new Date(date);
        return moment(dateFormat).format("YYYY-MM-DD");
    } return null;

};
export const convertDateBooking = (date: any) => {
    if (date) {
        let dateFormat = new Date(date);
        return moment(dateFormat).format("YYYY-MM-DDThh:mm:ss");
    } return null;
};

export const formatCurrencyVND = (amount: string) => {
    // Định dạng số với phân cách hàng nghìn
    let formattedAmount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedAmount} ₫`;
}
export function formatCurrency(value: number): string {
    return value.toLocaleString('vi-VN');
}
export const convertSlug = (str: string) => {
    if (str) {
        return slugify(str, { lower: true, locale: "vi" })
    }
    return ""
};

export const convertRouteWithSlug = (routhPath: string, str: string, id: string) => {
    if (str) {
        return `${routhPath}${slugify(str, { lower: true, locale: "vi" })} -${id}.html`;
    }
    return "";
};

export const splitTakeId = (route: string) => {
    if (route) {
        const word1 = route.split(".html");
        const word2 = word1[0].split("-");
        const wordResult = word2[word2.length - 1];
        return wordResult
    }
    return "";
}

