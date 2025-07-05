import { configImageURL } from '@/infrastructure/helper/helper';
import moment from 'moment';
import 'moment/locale/vi';
import React from 'react';
type Props = {
    blog: any
}
const MainContent = (props: Props) => {
    const { blog } = props;
    return (
        <div className="ps-post--detail ps-post--parallax">
            <div
                className="ps-post__header bg--parallax"
                style={{ backgroundImage: `url(${configImageURL(blog.image)})` }}>
                <div className="container">
                    <h4>{blog.category_name}</h4>
                    <h1>
                        {blog.title}
                    </h1>
                    <p> {moment(blog.created_at).locale('vi').format('ll')} - {blog.user_name}</p>
                </div>
            </div>
            <div className="container">
                <div className="ps-post__content">
                    <article style={{ padding: '0 8px' }} dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
            </div>
        </div>
    );
}

export default MainContent;
