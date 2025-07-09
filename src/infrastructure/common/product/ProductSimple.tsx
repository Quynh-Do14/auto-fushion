import React from 'react';
import Link from 'next/link';
import useProduct from '@/infrastructure/hook/useProduct';
import Rating from '@/infrastructure/common/product/Rating';
import { ROUTE_PATH } from '@/core/common/appRouter';
import { convertSlug } from '@/infrastructure/helper/helper';
type Props = {
    product: any
}
const ProductSimple = (props: Props) => {
    const { product } = props
    const { thumbnailImage, price, name, badge } = useProduct();

    return (
        <div className="ps-product ps-product--simple">
            <div className="ps-product__thumbnail">
                <Link href={`${ROUTE_PATH.PRODUCT}/${convertSlug(product.name)}-${product.id}.html`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
                {badge(product)}
                {/* <ModuleProductActions product={product} /> */}
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    {name(product)}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    {price(product)}
                </div>
            </div>
        </div>
    );
};

export default ProductSimple;
