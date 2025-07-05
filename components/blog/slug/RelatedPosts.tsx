import React from 'react';
import BlogGrid from '../BlogGrid';
type Props = {
    blogRelated: any[]
    loading: boolean
}
const RelatedPosts = (props: Props) => {
    const { blogRelated, loading } = props;


    let postItemsView;
    if (!loading && blogRelated) {
        postItemsView = blogRelated.map((item) => {
            return (
                <div className=" col-md-3 col-sm-6 col-6" key={item.id}>
                    <BlogGrid post={item} />
                </div>
            );
        });
    }

    return (
        <div className="ps-related-posts">
            <h3>Bài viết liên quan</h3>
            <div className="row">{postItemsView}</div>
        </div>
    );
};

export default RelatedPosts;
