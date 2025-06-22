import React from 'react';
import Link from 'next/link';
type Props = {
    product: any
}
const DetailSpecification = (props: Props) => {
    const { product } = props;
    return (
        <div className="ps-product__specification">
            <p>
                <strong>Mã sản phẩm:</strong>{product.id}
            </p>
            <p className="categories">
                <strong> Danh mục:</strong>
                <Link href="/shop">
                    <a>{product.category_name}</a>
                </Link>
            </p>
        </div>
    );
}

export default DetailSpecification;
