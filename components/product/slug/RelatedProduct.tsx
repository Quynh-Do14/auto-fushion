import Product from '@/infrastructure/common/product/Product';
import SkeletonProduct from '@/infrastructure/common/skeleton/SkeletonProduct';
import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import React, { useEffect, useState } from 'react';
type Props = {
    productItems: any[]
    loading: boolean
}
const RelatedProduct = (props: Props) => {
    const { productItems, loading } = props

    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
        } else {
            productItemsView = <p>Không tìm thấy sản phẩm.</p>;
        }
    } else {
        productItemsView = generateTempArray(3).map((item) => (
            <SkeletonProduct key={item} />
        ));
    }

    return (
        <aside className="widget widget_same-brand">
            <h3>Sản phẩm tương tự</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default RelatedProduct;
