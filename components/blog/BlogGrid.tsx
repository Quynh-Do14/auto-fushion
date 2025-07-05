import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import moment from 'moment';
import 'moment/locale/vi';
import { configImageURL, convertSlug } from '@/infrastructure/helper/helper';
import { ROUTE_PATH } from '@/core/common/appRouter';
type Props = {
    post: any,
}
const BlogGrid = (props: Props) => {
    const { post } = props;
    let imageThumbnailView, categoriesView;
    if (post) {
        if (post.thumbnail !== null) {
            imageThumbnailView = (
                <LazyLoad>
                    <img
                        className="post-image"
                        src={`${configImageURL(post.image)}`}
                        alt="img"
                    />
                </LazyLoad>
            );
        }
    }
    return (
        <article className="ps-post">
            <div className="ps-post__thumbnail">
                <Link href={`${ROUTE_PATH.BLOG}/${convertSlug(post.title)}-${post.id}.html`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {imageThumbnailView}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__meta">{categoriesView}</div>
                <Link href={`${ROUTE_PATH.BLOG}/${convertSlug(post.title)}-${post.id}.html`}>
                    <a className="ps-post__title text-truncate-2">{post.title}</a>
                </Link>
                <p>
                    {moment(post.created_at).locale('vi').format('ll')}
                    bởi <a> {post.user_name} </a>
                </p>
            </div>
        </article>
    );
};

export default BlogGrid;
