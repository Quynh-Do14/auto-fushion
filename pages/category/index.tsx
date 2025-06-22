import ShopBanner from '@/infrastructure/common/banner/ShopBanner';
import ShopBrands from '@/infrastructure/common/banner/ShopBrands';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import React from 'react'
import ListCategories from '../../components/category/ListCategories';

const CategoryPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Danh mục sản phẩm',
        },
    ];

    return (
        <MainLayoutPublic>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <ListCategories />
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default CategoryPage