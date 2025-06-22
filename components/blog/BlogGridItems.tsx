import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomPagination from '@/infrastructure/common/pagination/CustomPagination';
import BlogGrid from './BlogGrid';
type Props = {
    slug: string,
    columns: number,
}
const BlogGridItems = (props: Props) => {
    const { slug, columns } = props;
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);




    let postItemsView;
    if (!loading && posts) {
        postItemsView = posts.map((item, index) => {
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
                currentPage={0}
                total={0}
                totalPage={0}
                onChangePage={() => { }}
            />
        </div>
    );
};

export default BlogGridItems;
