import styles from "@/asset/css/admin/layout.module.css";
import Sidebar from "./Sider";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CategoryBlogState, CategoryProductState } from "@/core/atoms/category/categoryState";
import categoryBlogService from "@/infrastructure/repository/category/categoryBlog.service";
import categoryProductService from "@/infrastructure/repository/category/categoryProduct.service";
import brandService from "@/infrastructure/repository/brand/brand.service";
import { BrandState } from "@/core/atoms/brand/brandState";
import Head from "next/head";
import { configImageURL } from "@/infrastructure/helper/helper";

export default function AdminLayout({ breadcrumb, title, redirect, children }: any) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [, setCategoryProductState] = useRecoilState(CategoryProductState);
    const [, setCategoryBlogState] = useRecoilState(CategoryBlogState);
    const [, setBrandState] = useRecoilState(BrandState);

    const onGetListCategoryAsync = async () => {
        try {
            await categoryProductService.GetCategory(
                {},
                () => { }
            ).then((res) => {
                setCategoryProductState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const onGetListBlogCategoryAsync = async () => {
        try {
            await categoryBlogService.GetBlogCategory(
                {},
                () => { }
            ).then((res) => {
                setCategoryBlogState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const onGetListBrandAsync = async () => {
        try {
            await brandService.GetBrand(
                {},
                () => { }
            ).then((res) => {
                setBrandState({
                    data: res.data
                })
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        onGetListCategoryAsync().then(_ => { });
        onGetListBlogCategoryAsync().then(_ => { });
        onGetListBrandAsync().then(_ => { });
    }, []);

    const defaultTitle = 'Auto Fusion';
    const defaultDescription = "Auto Fusion - Website chuyên cung cấp sản phẩm, phụ tùng và dịch vụ ô tô chính hãng. Uy tín - Chuyên nghiệp - Giá tốt.";
    const defaultImage = configImageURL('/uploads/thumbnail.png');
    const defaultUrl = process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://autofusion.vn';

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>{defaultTitle}</title>
                <meta name="description" content={defaultDescription} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={defaultUrl} />
                <meta property="og:title" content={defaultTitle} />
                <meta property="og:description" content={defaultDescription} />
                <meta property="og:image" content={defaultImage} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={defaultUrl} />
                <meta name="twitter:title" content={defaultTitle} />
                <meta name="twitter:description" content={defaultDescription} />
                <meta name="twitter:image" content={defaultImage} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`${styles.mainContent} ${!isSidebarOpen ? styles.full : ''}`}>
                <Header
                    onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                    breadcrumb={breadcrumb}
                    title={title}
                    redirect={redirect}
                />
                <div className={styles.pageContent}>{children}</div>
            </div>
        </div>
    );
}
