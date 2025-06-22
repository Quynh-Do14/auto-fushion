import Product from '@/infrastructure/common/product/Product';
import SkeletonProduct from '@/infrastructure/common/skeleton/SkeletonProduct';
import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import React, { useEffect, useState } from 'react';

type Props = {
    columns?: number
    pageSize?: number
    productItems: Array<any>
    loading: boolean
}
const ProductGroupGridItems = (props: Props) => {
    const {
        columns = 3,
        pageSize = 12,
        productItems,
        loading
    } = props

    // Views
    let productItemsView;

    if (!loading && productItems) {
        if (productItems.length > 0) {
            const items = productItems.map((item, index) => {
                return (
                    <div className={"col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6"} key={index}>
                        <Product product={item} />
                    </div>
                );
            });
            productItemsView = <div className="row">{items}</div>;
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(columns * 2).map((item) => (
            <div className={"col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6"} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return <div className="ps-shop-items">{productItemsView}</div>;
};

export default ProductGroupGridItems;
