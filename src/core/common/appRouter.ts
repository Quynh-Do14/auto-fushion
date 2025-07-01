const PREFIX = "";
const PREFIX_ADMIN = "/admin";
export const ROUTE_PATH = {
    LOGIN: `${PREFIX}/auth/login`,
    REGISTER: `${PREFIX}/auth/register`,
    FORGOT_PASSWORD: `${PREFIX}/forgot-password`,
    HOMEPAGE: `${PREFIX}/`,
    CATEGORY: `${PREFIX}/category`,
    PRODUCT: `${PREFIX}/product`,
    BLOG: `${PREFIX}/blog`,

    // ADMIN
    USER_MANAGEMENT: `${PREFIX_ADMIN}/user-management`,
    ADD_USER_MANAGEMENT: `${PREFIX_ADMIN}/user-management/add`,

    CATEGORY_BLOG_MANAGEMENT: `${PREFIX_ADMIN}/category-blog-management`,
    ADD_CATEGORY_BLOG_MANAGEMENT: `${PREFIX_ADMIN}/category-blog-management/add`,

    BLOG_MANAGEMENT: `${PREFIX_ADMIN}/blog-management`,
    ADD_BLOG_MANAGEMENT: `${PREFIX_ADMIN}/blog-management/add`,

    CATEGORY_PRODUCT_MANAGEMENT: `${PREFIX_ADMIN}/category-product-management`,
    ADD_CATEGORY_PRODUCT_MANAGEMENT: `${PREFIX_ADMIN}/category-product-management/add`,

    PRODUCT_MANAGEMENT: `${PREFIX_ADMIN}/product-management`,
    ADD_PRODUCT_MANAGEMENT: `${PREFIX_ADMIN}/product-management/add`,
    // ADMIN

}