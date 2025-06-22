export class Endpoint {
    static Auth = class {
        static Login = "/dangnhap"
        static Register = "/dangki"
        static Profile = "/profile/detail"
        static RefreshToken = "/auth/refresh-token"
    }
    static Product = class {
        static Get = "/product"
        static GetById = "/product"
        static Add = "/product"
        static Update = "/product"
        static Delete = "/product"
    }
    static Category = class {
        static Get = "/category"
        static GetById = "/category"
        static Add = "/category"
        static Update = "/category"
        static Delete = "/category"
    }
}