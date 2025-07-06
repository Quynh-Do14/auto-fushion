import React from 'react';
import Link from 'next/link';
type Props = {
    product: any
}
const DetailDescription = (props: Props) => {
    const { product } = props;
    return (
        <div className="ps-product__desc">
            <p>
               Thông tin thêm:
                <Link href="/shop">
                    <a>
                        <strong> {product.vendor}</strong>
                    </a>
                </Link>
            </p>
            <div
                dangerouslySetInnerHTML={{ __html: product.more_infomation }}
            />
        </div>
    );
}

export default DetailDescription;
