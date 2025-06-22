import React from 'react';
import Link from 'next/link';
import Rating from '../product/Rating';
type Props = {
    product: any;
};
const ProductSearchResult = (props: Props) => {
    const { product } = props

    return (
        <div className="ps-product ps-product--wide ps-product--search-result">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
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
