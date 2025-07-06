import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomPagination from '@/infrastructure/common/pagination/CustomPagination';
import BlogGrid from './BlogGrid';
type Props = {
    listBlog: any[],
    columns: number,
    loading: boolean,
    totalPage: number,
    currentPage: number
    totalElement: number
    total: number
    onChangePage: () => void
}
const BlogGridItems = (props: Props) => {
    const { listBlog, columns, loading, totalPage, currentPage, totalElement, total, onChangePage } = props;

    let postItemsView;
    if (!loading && listBlog) {
        postItemsView = listBlog.map((item, index) => {
            if (columns === 4) {
                return (
                    <div className=" col-md-4 col-sm-6" key={index}>
                        <BlogGrid post={item} />
                    </div>
                );
            } else if (columns === 4) {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                        <BlogGrid post={item} />
                    </div>
                );
            } else {
                return (
                    <div className="col-md-6" key={index}>
                        <BlogGrid post={item} />
                    </div>
                );
            }
        });
    }
    return (
        <div className="ps-post-items">
            <div className="row">{postItemsView}</div>
            <CustomPagination
                currentPage={currentPage}
                total={total}
                totalPage={totalPage}
                totalElement={totalElement}
                onChangePage={onChangePage}
            />
        </div>
    );
};

export default BlogGridItems;
