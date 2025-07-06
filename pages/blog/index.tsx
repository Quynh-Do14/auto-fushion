import BreadCrumb2 from '@/infrastructure/common/breadcrumb/BreadCrumb2'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import React, { useEffect, useState } from 'react'
import ModulePostGridItems from '../../components/blog/BlogGridItems';
import WidgetBlogSearch from '../../components/blog/WidgetBlogSearch';
import WidgetBlogCategories from '../../components/blog/WidgetBlogCategories';
import { useRecoilValue } from 'recoil';
import { CategoryBlogState } from '@/core/atoms/category/categoryState';
import { useRouter } from 'next/router';
import blogService from '@/infrastructure/repository/blog/blog.service';
const breadCrumb = [
    {
        text: 'Trang chủ',
        url: '/',
    },
    {
        text: 'Tin tức',
    },
];

const BlogPage = () => {

    const [listBlog, setListBlog] = useState<Array<any>>([])
    const [searchText, setSearchText] = useState<string>("");
    const [totalPage, setTotalPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalElement, setTotalElement] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);
    const [categoryId, setCategoryId] = useState<string>("");

    const router = useRouter();
    const { search, page, limit, category_id } = router.query;
    const categoryBlogState = useRecoilValue(CategoryBlogState).data

    const onGetListBlogAsync = async ({ name = searchText, limit = pageSize, page = currentPage, category_id = categoryId }) => {
        const param = {
            page: page,
            limit: limit,
            search: name,
            category_id: category_id
        }
        try {
            await blogService.GetBlog(
                param,
                setLoading
            ).then((res) => {
                setListBlog(res.data);
                setTotalElement(res.limit);
                setTotalPage(res.totalPages);
                setTotal(res.total);
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    const onSearch = async (name = searchText, limit = pageSize, page = 1, category_id = categoryId) => {
        await onGetListBlogAsync({ name: name, limit: limit, page: page, category_id: category_id }).then(_ => { });
    };


    const onSearchText = async () => {
        router.push(`/blog?search=${searchText}`);
        await onSearch(searchText, pageSize, currentPage, categoryId).then(_ => { });
    }

    const onChangePage = async (page: number) => {
        setCurrentPage(page);
        router.push(`/blog?page=${page}`);
        await onSearch(searchText, pageSize, page, categoryId).then(_ => { });
    }


    useEffect(() => {
        const parsedPage = parseInt(page as string) || 1;
        const parsedLimit = parseInt(limit as string) || 10;
        const parsedSearch = (search as string) || "";
        const parsedCategory = (category_id as string) || "";

        setSearchText(parsedSearch);
        setCurrentPage(parsedPage);
        setPageSize(parsedLimit);
        setCategoryId(parsedCategory);

        onSearch(parsedSearch, parsedLimit, parsedPage, parsedCategory);
    }, [router.query]);

    return (
        <MainLayoutPublic>
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Bài viết hôm nay</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                </div>
                <div className="container">
                    <div className="ps-blog--sidebar reverse">
                        <div className="ps-blog__left">
                            <ModulePostGridItems
                                listBlog={listBlog}
                                columns={3}
                                loading={loading}
                                totalPage={totalPage}
                                currentPage={currentPage}
                                totalElement={totalElement}
                                total={total}
                                onChangePage={() => onChangePage}
                            />
                        </div>
                        <div className="ps-blog__right">
                            <WidgetBlogSearch
                                onSearchText={onSearchText}
                                searchText={searchText}
                                setSearchText={setSearchText}
                            />
                            <WidgetBlogCategories
                                categoryBlogState={categoryBlogState}
                                setCategoryId={setCategoryId}
                                categoryId={categoryId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default BlogPage