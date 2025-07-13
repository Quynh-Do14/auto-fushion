import ShopBanner from '@/infrastructure/common/banner/ShopBanner';
import ShopBrands from '@/infrastructure/common/banner/ShopBrands';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import React, { useState } from 'react'
import ListCategories from '../../components/category/ListCategories';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { useRecoilValue } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';
import CategoryShop from '../../components/category/shop-categories';
import { BrandState } from '@/core/atoms/brand/brandState';

const CategoryPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Danh mục & Thương hiệu sản phẩm ',
        },
    ];

    const categoryProduct = useRecoilValue(CategoryProductState).data
    const brand = useRecoilValue(BrandState).data

    return (
        <MainLayoutPublic>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    {/* <ShopBrands /> */}
                    <ListCategories
                        title={'Danh mục sản phẩm'}
                        dataList={categoryProduct} />
                    <CategoryShop
                        title={'Tìm kiếm sản phẩm theo thương hiệu'}
                        dataList={brand} />
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default CategoryPage