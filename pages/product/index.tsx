import React, { useEffect, useState } from 'react';
import ShopBanner from '@/infrastructure/common/banner/ShopBanner';
import ShopBrands from '@/infrastructure/common/banner/ShopBrands';
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import ProductListing from '../../components/product/ProductListing';
import WidgetProductFilterCategories from '../../components/product/WidgetProductFilterCategories';
import WidgetProductFilterByPriceRange from '../../components/product/WidgetProductFilterByPriceRange';
import productService from '@/infrastructure/repository/product/product.service';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';
import CustomPagination from '@/infrastructure/common/pagination/CustomPagination';

const ProductPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Sản phẩm',
        },
    ];

    const [listProduct, setListProduct] = useState<Array<any>>([])
    const [searchText, setSearchText] = useState<string>("");
    const [totalPage, setTotalPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(200000000);
    const [categoryId, setCategoryId] = useState<string>("");
    const router = useRouter();
    const { min_price, max_price, search, page, limit, category_id } = router.query;
    const productCategoryState = useRecoilValue(CategoryProductState).data;

    const onGetListProductAsync = async ({ name = searchText, limit = pageSize, page = currentPage, min = minPrice, max = maxPrice, category_id = categoryId }) => {
        const param = {
            page: page,
            limit: limit,
            search: name,
            min_price: min,
            max_price: max,
            category_id: category_id
        }
        try {
            await productService.GetProduct(
                param,
                setLoading
            ).then((res) => {
                setListProduct(res.data);
                setTotalPage(res.totalPages);
                setTotal(res.total);
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    const onSearch = async (name = searchText, limit = pageSize, page = 1, min = minPrice, max = maxPrice, category_id = categoryId) => {
        await onGetListProductAsync({ name: name, limit: limit, page: page, min: min, max: max, category_id: category_id }).then(_ => { });
    };

    const handleChangeRange = async (value: any[]) => {
        console.log("value", value);

        setMinPrice(value[0]);
        setMaxPrice(value[1]);
        router.push(`/product?min_price=${value[0]}&max_price=${value[1]}`);
        await onSearch(searchText, pageSize, currentPage, value[0], value[1], categoryId).then(_ => { });
    }
    const onChangePage = async (page: number) => {
        setCurrentPage(page);
        router.push(`/product?page=${page}`);
        await onSearch(searchText, pageSize, page, minPrice, maxPrice, categoryId).then(_ => { });
    }

    useEffect(() => {
        const parsedMinPrice = parseInt(min_price as string) || 0;
        const parsedMaxPrice = parseInt(max_price as string) || 200000000;
        const parsedPage = parseInt(page as string) || 1;
        const parsedLimit = parseInt(limit as string) || 10;
        const parsedSearch = (search as string) || "";
        const parsedCategory = (category_id as string) || "";

        setMinPrice(parsedMinPrice);
        setMaxPrice(parsedMaxPrice);
        setSearchText(parsedSearch);
        setCurrentPage(parsedPage);
        setPageSize(parsedLimit);
        setCategoryId(parsedCategory);

        onSearch(parsedSearch, parsedLimit, parsedPage, parsedMinPrice, parsedMaxPrice, parsedCategory);
    }, [router.query]);

    return (
        <MainLayoutPublic>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetProductFilterByPriceRange
                                min={minPrice}
                                setMin={setMinPrice}
                                max={maxPrice}
                                setMax={setMaxPrice}
                                handleChangeRange={handleChangeRange}
                            />
                            <WidgetProductFilterCategories
                                productCategory={productCategoryState}
                                setCategoryId={setCategoryId}
                                categoryId={categoryId}
                                loading={loading}
                            />
                        </div>
                        <div className="ps-layout__right">
                            <ProductListing
                                title="Các sản phẩm"
                                listProduct={listProduct}
                                total={total}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                loading={loading}
                            />
                            <CustomPagination
                                currentPage={currentPage}
                                total={total}
                                totalPage={totalPage}
                                onChangePage={onChangePage} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default ProductPage