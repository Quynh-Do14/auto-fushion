import React from 'react';
import Link from 'next/link';
import Rating from '../product/Rating';
import { ROUTE_PATH } from '@/core/common/appRouter';
import { convertSlug } from '@/infrastructure/helper/helper';
type Props = {
    product: any;
};
const ProductSearchResult = (props: Props) => {
    const { product } = props

    return (
        <div className="ps-product ps-product--wide ps-product--search-result">
            <div className="ps-product__thumbnail">
                <Link href={`${ROUTE_PATH.PRODUCT}/${convertSlug(product.name)}-${product.id}.html`}>
                    <div>{product.id}</div>
                </Link>
            </div>
            <div className="ps-product__content">
                {product.name}
                <div className="ps-product__rating">
                    <Rating />
                    <span>{product.ratingCount}</span>
                </div>
                {product.price}
            </div>
        </div>
    );
};
export default ProductSearchResult;
