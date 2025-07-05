import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import React, { useEffect, useState } from 'react'
import MainContent from '../../../components/blog/slug/MainContent'
import { useRouter } from 'next/router';
import { splitTakeId } from '@/infrastructure/helper/helper';
import blogService from '@/infrastructure/repository/blog/blog.service';
import RelatedPosts from '../../../components/blog/slug/RelatedPosts';

const SlugBlogComponent = () => {
    const router = useRouter();
    const { query } = router;
    const [blog, setBlog] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const onGetBlogByIdAsync = async () => {
        const slug = splitTakeId(String(query.slug));

        if (!query.slug) return; // đảm bảo có slug mới gọi API

        try {
            const res = await blogService.GetBlogById(String(slug), setLoading);
            setBlog(res);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onGetBlogByIdAsync();
    }, [query.slug]);
    return (
        <MainLayoutPublic>
            <MainContent
                blog={blog}
            />
            <div className="container">
                <RelatedPosts
                    blogRelated={blog.related_blogs}
                    loading={loading}
                />
            </div>
        </MainLayoutPublic >
    )
}

export default SlugBlogComponent