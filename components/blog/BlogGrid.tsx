import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import moment from 'moment';
type Props = {
    post: any,
}
const basePostUrl = 'http://127.0.0.1:8000';
const BlogGrid = (props: Props) => {
    const { post } = props;
    let imageThumbnailView, categoriesView;
    if (post) {
        if (post.thumbnail !== null) {
            imageThumbnailView = (
                <LazyLoad>
                    <img
                        src={`${basePostUrl}${post.thumbnail.url}`}
                        alt="img"
                    />
                </LazyLoad>
            );
        }
    }
    return (
        <article className="ps-post">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {imageThumbnailView}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">{categoriesView}</div>
                <Link href="/post/[pid]" as={`/post/${post.id}`}>
                    <a className="ps-post__title">{post.name}</a>
                </Link>
                <p>
                    {moment(post.created_at).format('ll')} by
                    <Link href="/blog">
                        <a href="#"> drfurion</a>
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default BlogGrid;
