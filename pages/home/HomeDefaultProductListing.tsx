import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '@/infrastructure/common/skeleton/SkeletonProduct';
import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import { ProductGroupWithCarousel } from '@/infrastructure/common/product/ProductGroupWithCarousel';
import productService from '@/infrastructure/repository/product/product.service';
type Props = {
    title: string
}
const HomeDefaultProductListing = (props: Props) => {

    const { title } = props;
    const [productItems, setProductItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const onGetListCategoryAsync = async () => {
        const param = {
            page: 1,
            size: 8,
        }
        try {
            await productService.GetProduct(
                param,
                setLoading
            ).then((res) => {
                setProductItems(res.data)
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onGetListCategoryAsync().then(_ => { });
    }, []);


    // views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = (
                <ProductGroupWithCarousel
                    products={productItems}
                    type="fullwidth"
                />
            );
        } else {
            productItemsView = <p>Không tìm thấy sản phẩm.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </div>
    );
};

export default HomeDefaultProductListing;
