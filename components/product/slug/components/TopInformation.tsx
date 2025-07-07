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
    console.log('product', product);

    if (product.sale_price) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">{formatCurrency(Number(product.price))}</del>đ
                {formatCurrency(Number(product.sale_price))}đ
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
