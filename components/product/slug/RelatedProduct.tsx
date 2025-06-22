import Product from '@/infrastructure/common/product/Product';
import SkeletonProduct from '@/infrastructure/common/skeleton/SkeletonProduct';
import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import React, { useEffect, useState } from 'react';

const RelatedProduct = () => {
    // const [productItems, setProductItems] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const productItems = [
        {
            "thumbnailImage": 'https://bizweb.dktcdn.net/thumb/large/100/415/690/products/hinh-7.png?v=1714982807537',
            "id": "zx-adas-limited",
            "name": "Màn hình ô tô Android ZX ADAS bản giới hạn",
            "price": 21900000,
            // "currency": "VND",
            // "mo_ta": "Màn hình Android thông minh, hỗ trợ ADAS, cấu hình cực khủng cho trải nghiệm mượt mà.",
            // "he_dieu_hanh": "Android 13.0",
            // "do_phan_giai": "2000x1200",
            // "bo_xu_ly": "ZT-A86",
            // "ram": "12GB",
            // "rom": "512GB",
            // "nam_san_xuat": 2025,
            // "bao_hanh": "24 tháng (1 đổi 1 trong năm đầu)"
        },
        {
            "thumbnailImage": 'https://thietbihaidang.vn/wp-content/uploads/Artboard-11-100-1.jpg',
            "id": "camera-hanh-trinh-x9",
            "name": "Camera hành trình X9 Pro Dual Lens",
            "price": 3590000,
        },
        {
            "thumbnailImage": 'https://thietbihaidang.vn/wp-content/uploads/Artboard-11-100-1.jpg',

            "id": "cam-bien-ap-suat-lop-tpms",
            "name": "Cảm biến áp suất lốp TPMS Solar",
            "price": 1450000,
        },
        {
            "thumbnailImage": 'https://thietbihaidang.vn/wp-content/uploads/Artboard-11-100-1.jpg',
            "id": "ghe-massage-oto-lux",
            "name": "Ghế massage ô tô Lux AutoPro",
            "price": 2790000,
        }
    ]
    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
        } else {
            productItemsView = <p>Không tìm thấy sản phẩm.</p>;
        }
    } else {
        productItemsView = generateTempArray(3).map((item) => (
            <SkeletonProduct key={item} />
        ));
    }

    return (
        <aside className="widget widget_same-brand">
            <h3>Sản phẩm tương tự</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default RelatedProduct;
