import React from 'react';
import Link from 'next/link';
import useProduct from '@/infrastructure/hook/useProduct';
import { formatCurrency } from '@/infrastructure/helper/helper';
import Rating from './Rating';
import ModuleProductProgressbar from './modules/ModuleProductProgressbar';
type Props = {
    product: any
}
const ProductDealOfDay = (props: Props) => {
    const { product } = props
    const { thumbnailImage, badge, name } = useProduct();
    function StrapiProductPriceExpanded(product: any) {
        let view;
        if (product.is_sale === true) {
            view = (
                <p className="ps-product__price sale">
                    ${formatCurrency(product.price)}
                    <del className="ml-2">
                        ${formatCurrency(product.percent_sale)}
                    </del>
                    <small>18% off</small>
                </p>
            );
        } else {
            view = (
                <p className="ps-product__price">
                    ${formatCurrency(product.price)}
                </p>
            );
        }
        return view;
    }


    return (
        <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
                {badge(product)}
                {/* <ModuleProductActions product={product} /> */}
            </div>
            <div className="ps-product__container">
                <Link href="/shop">
                    <a className="ps-product__vendor">Young Shop</a>
                </Link>
                <div className="ps-product__content">
                    {StrapiProductPriceExpanded(product)}
                    {name(product)}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    <ModuleProductProgressbar product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductDealOfDay;
