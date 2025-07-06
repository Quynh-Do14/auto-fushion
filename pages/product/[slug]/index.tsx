// pages/product/[slug].tsx
import { GetServerSideProps } from 'next';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import { Endpoint } from '@/core/common/apiLink';
import { configImageURL, splitTakeId } from '@/infrastructure/helper/helper';
import ProductDetail from '../../../components/product/slug/ProductDetail';
import RelatedProduct from '../../../components/product/slug/RelatedProduct';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const SlugProductPage = ({ product, relateProducts }: any) => {
    const breadCrumb = [
        { text: 'Trang chủ', url: '/' },
        { text: 'Sản phẩm', url: '/product' },
        { text: product?.name || 'Loading...' },
    ];

    return (
        <MainLayoutPublic
            title={product.name}
            description={product.short_description}
            image={configImageURL(product?.image)}
        >
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">
                            <ProductDetail product={product} />
                        </div>
                        <div className="ps-page__right">
                            <section>
                                <RelatedProduct productItems={relateProducts} loading={false} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params!;
    const productId = splitTakeId(String(slug));

    try {
        const res = await fetch(`${baseURL}${Endpoint.Product.GetById}/${productId}`, {
            cache: 'no-store',
        });
        const dataDetail = await res.json();
        return {
            props: {
                product: dataDetail || {},
                relateProducts: dataDetail?.sameCategoryProducts || [],
            },
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        return {
            notFound: true,
        };
    }
};

export default SlugProductPage;
