import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Product from '@/infrastructure/common/product/Product';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb';
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import ProductGroupGridItems from '../../components/search/ProductGroupGridItems';
import productService from '@/infrastructure/repository/product/product.service';

const SearchPage = () => {
    const [productItems, setProductItems] = useState<Array<any>>([])
    const [pageSize] = useState(100);
    const [searchText, setsearchText] = useState('');
    const [categoryId, setCategoryId] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const breadcrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Kết quả tìm kiếm',
        },
    ];

    const onGetListProductAsync = async ({ name = searchText, category_id = categoryId }) => {
        const param = {
            search: name,
            category_id: category_id,
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

    const onSearch = async (name = searchText) => {
        await onGetListProductAsync({ name: name }).then(_ => { });
    };
    const { keyword, category_id } = router.query;

    useEffect(() => {
        const parsedSearch = (keyword as string) || "";
        const parsedCategory = (category_id as string) || "";
        setsearchText(parsedSearch);
        setCategoryId(parsedCategory);
        onSearch(parsedSearch);
    }, [keyword, category_id]);

    let shopItemsView, statusView;
    if (!loading) {
        if (productItems) {
            shopItemsView = (
                <ProductGroupGridItems
                    productItems={productItems}
                    columns={6}
                    pageSize={pageSize}
                    loading={loading}
                />
            );
            if (productItems.length > 0) {
                const items = productItems.map((item) => {
                    return (
                        <div className="col-md-3 col-sm-6 col-6" key={item.id}>
                            <Product product={item} />
                        </div>
                    );
                });
                shopItemsView = (
                    <div className="ps-product-items row">{items}</div>
                );
                statusView = (
                    <p>
                        <strong style={{ color: '#000' }}>
                            {productItems.length}
                        </strong>{' '}
                        Sản phẩm được tìm thấy
                    </p>
                );
            } else {
                shopItemsView = <p>Không có sản phẩm nào</p>;
            }
        } else {
            shopItemsView = <p>Không có sản phẩm nào</p>;
        }
    } else {
        statusView = <p>Đang tìm kiếm...</p>;
    }

    return (
        <MainLayoutPublic>
            <div className="ps-page">
                <BreadCrumb breacrumb={breadcrumb} layout={'fullwidth'} />
            </div>
            <div className="container">
                <div className="ps-shop ps-shop--search">
                    <div className="container">
                        <div className="ps-shop__header">
                            <h1>
                                Kết quả tìm kiếm: "<strong>{searchText}</strong>"
                            </h1>
                        </div>
                        <div className="ps-shop__content">
                            {statusView}
                            {shopItemsView}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    );
};

export default SearchPage;
