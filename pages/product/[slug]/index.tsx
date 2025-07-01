import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import SkeletonProductDetail from '@/infrastructure/common/skeleton/SkeletonProductDetail';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ProductDetail from '../../../components/product/slug/ProductDetail';
import RelatedProduct from '../../../components/product/slug/RelatedProduct';
import productService from '@/infrastructure/repository/product/product.service';
import { splitTakeId } from '@/infrastructure/helper/helper';

const SlugProductPage = () => {
    const router = useRouter();
    const { query } = router;
    const [product, setProduct] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const onGetProductByIdAsync = async () => {
        const slug = splitTakeId(String(query.slug));

        if (!query.slug) return; // đảm bảo có slug mới gọi API

        try {
            const res = await productService.GetProductById(String(slug), setLoading);
            setProduct(res);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onGetProductByIdAsync();
    }, [query.slug]); // chỉ re-run khi query.slug thay đổi

    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Sản phẩm',
            url: '/product',
        },
        {
            text: product ? product.name : 'Loading...',
        },
    ];

    let productView;
    if (!loading) {
        if (product) {
            productView = <ProductDetail product={product} />;
        }
    } else {
        productView = <SkeletonProductDetail />;
    }

    return (
        <MainLayoutPublic
            title={product.name}
            description={product.description}
            image={product?.images?.[0]}
        >
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            <section>
                                <RelatedProduct />
                            </section>
                        </div>
                    </div>

                    {/* <CustomerBought
                        layout="fullwidth"
                        collectionSlug="deal-of-the-day"
                    />
                    <RelatedProduct collectionSlug="shop-recommend-items" /> */}
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default SlugProductPage