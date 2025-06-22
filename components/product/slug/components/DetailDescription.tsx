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
                Sold By:
                <Link href="/shop">
                    <a>
                        <strong> {product.vendor}</strong>
                    </a>
                </Link>
            </p>
            <ul className="ps-list--dot">
                <li>Màn hình cảm ứng đa điểm, thiết kế hiện đại, dễ thao tác</li>
                <li>Kết nối không dây tiện lợi: hỗ trợ Bluetooth, WiFi</li>
                <li>Thời lượng hoạt động bền bỉ, phù hợp cho các hành trình dài</li>
                <li>Tặng kèm dây nguồn và phụ kiện kết nối chuẩn 3.5mm</li>
                <li>Hệ thống loa tích hợp: 2 loa tweeter 3/4″ và 1 loa woofer 4″ cho âm thanh sống động</li>
            </ul>
        </div>
    );
}

export default DetailDescription;
