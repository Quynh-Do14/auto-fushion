import React from 'react';
import Link from 'next/link';
import Rating from '@/infrastructure/common/product/Rating';
import { formatCurrency } from '@/infrastructure/helper/helper';
type Props = {
    product: any
}
const TopInformation = (props: Props) => {
    const { product } = props;
    let priceView;
    const sale_price = Number(product.price) - Number(product.price * product.percent_sale / 100)
    if (product.percent_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">{formatCurrency(Number(product.price))}</del>
                {formatCurrency(Number(sale_price))}đ
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price"> {formatCurrency(Number(product.price))}</h4>;
    }
    return (
        <header>
            <h1>{product.name}</h1>
            <div className="ps-product__meta">
                <p>
                    <Link href={`/product?brand_id=${product.brand_id}`}>
                        <a className="ml-2 text-capitalize">Thương hiệu: {product.brand_name}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating />
                    {/* <span>(1 review)</span> */}
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default TopInformation;
