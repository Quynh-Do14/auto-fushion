import BreadCrumb2 from '@/infrastructure/common/breadcrumb/BreadCrumb2'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout';
import React from 'react'
import ModulePostGridItems from '../../components/blog/BlogGridItems';
import WidgetBlogSearch from '../../components/blog/WidgetBlogSearch';
import WidgetBlogCategories from '../../components/blog/WidgetBlogCategories';

const BlogPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Tin tức',
        },
    ];
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
                            <ModulePostGridItems slug="blog" columns={3} />
                        </div>
                        <div className="ps-blog__right">
                            <WidgetBlogSearch />
                            <WidgetBlogCategories />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutPublic>
    )
}

export default BlogPage