import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '@/infrastructure/common/skeleton/SkeletonProduct';
import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import { ProductGroupWithCarousel } from '@/infrastructure/common/product/ProductGroupWithCarousel';
import ProductGroupGridItems from '@/infrastructure/common/product/ProductGroupGridItems';

type Props = {
    title: string
    listProduct: Array<any>
    total: number
    currentPage: number
    pageSize: number
    loading: boolean
}
const ProductListing = (props: Props) => {
    const {
        title,
        listProduct,
        total,
        currentPage,
        pageSize,
        loading
    } = props;

    // views
    let productItemsView;
    if (!loading) {
        if (listProduct && listProduct.length > 0) {
            productItemsView = (
                <ProductGroupGridItems
                    products={listProduct}
                    columns={4}
                    pageSize={pageSize}
                    loading={loading}
                />
            );
        } else {
            productItemsView = <p>Không tìm thấy sản phẩm.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </div>
    );
};

export default ProductListing;
