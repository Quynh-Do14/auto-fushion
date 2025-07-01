export class Endpoint {
    static Auth = class {
        static Login = "/auth/login"
        static Register = "auth/register"
        static Profile = "/users/profile/detail"
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
    static User = class {
        static Get = "/users"
        static GetById = "/users"
        static Create = "/users"
        static Update = "/users"
        static Delete = "/users"
    }
}