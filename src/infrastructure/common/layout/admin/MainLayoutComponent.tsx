import styles from "@/asset/css/admin/layout.module.css";
import { BrandState } from '@/core/atoms/brand/brandState';
import { CategoryBlogState, CategoryProductState } from '@/core/atoms/category/categoryState';
import brandService from '@/infrastructure/repository/brand/brand.service';
import categoryBlogService from '@/infrastructure/repository/category/categoryBlog.service';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import Sidebar from "./Sider";
import Header from "./Header";
type Props = {
    breadcrumb: string
    title: string
    redirect: string
    component: any
}

const AdminLayoutComponent = (props: Props) => {
    const { breadcrumb, title, redirect, component } = props
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

    return (
        <div className={styles.wrapper}>
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`${styles.mainContent} ${!isSidebarOpen ? styles.full : ''}`}>
                <Header
                    onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                    breadcrumb={breadcrumb}
                    title={title}
                    redirect={redirect}
                />
                <div className={styles.pageContent}>{component.children}</div>
            </div>
        </div>
    )
}

export default AdminLayoutComponent