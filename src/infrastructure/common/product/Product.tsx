import React from 'react';
import Link from 'next/link';
import Rating from './Rating';
import useProduct from '@/infrastructure/hook/useProduct';
import { ROUTE_PATH } from '@/core/common/appRouter';
import { convertSlug } from '@/infrastructure/helper/helper';
type Props = {
    product: any
}
const Product = (props: Props) => {
    const { product } = props
    const { thumbnailImage, price, badge, name } = useProduct();

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link href={`${ROUTE_PATH.PRODUCT}/${convertSlug(product.name)}-${product.id}.html`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
                {badge(product)}
            </div>
            <div className="ps-product__container">
                <a className="ps-product__vendor"></a>
                <div className="ps-product__content">
                    {name(product)}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>02</span>
                    </div>
                    {price(product)}
                </div>
                <div className="ps-product__content hover">
                    {name(product)}
                    {price(product)}
                </div>
            </div>
        </div>
    );
};

export default Product;
