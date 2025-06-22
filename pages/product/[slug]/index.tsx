import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import SkeletonProductDetail from '@/infrastructure/common/skeleton/SkeletonProductDetail';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ProductDetail from '../../../components/product/slug/ProductDetail';
import RelatedProduct from '../../../components/product/slug/RelatedProduct';
import productService from '@/infrastructure/repository/product/product.service';

const SlugProductPage = () => {
    const router = useRouter();
    const { query } = router;
    const [product, setProduct] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const onGetProductByIdAsync = async () => {
        if (query.slug === undefined) return;
        setLoading(true)
        try {
            await productService.GetProductById(
                String(query.slug),
                setLoading
            ).then((res) => {
                setProduct(res)
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onGetProductByIdAsync().then(_ => { });
    }, [query]);
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
        <MainLayoutPublic>
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