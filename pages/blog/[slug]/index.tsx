import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import React, { useEffect, useState } from 'react'
import MainContent from '../../../components/blog/slug/MainContent'
import { useRouter } from 'next/router';
import { configImageURL, splitTakeId } from '@/infrastructure/helper/helper';
import blogService from '@/infrastructure/repository/blog/blog.service';
import RelatedPosts from '../../../components/blog/slug/RelatedPosts';
import { GetServerSideProps } from 'next';
import { Endpoint } from '@/core/common/apiLink';
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const SlugBlogComponent = ({ blog, relatedBlogs }: any) => {

    return (
        <MainLayoutPublic
            title={blog.title}
            description={blog.short_description}
            image={configImageURL(blog?.image)}
        >
            <MainContent
                blog={blog}
            />
            <div className="container">
                <RelatedPosts
                    blogRelated={relatedBlogs}
                    loading={false}
                />
            </div>
        </MainLayoutPublic >
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params!;
    const productId = splitTakeId(String(slug));

    try {
        const res = await fetch(`${baseURL}${Endpoint.Blog.GetById}/${productId}`, {
            cache: 'no-store',
        });
        const dataDetail = await res.json();
        return {
            props: {
                blog: dataDetail || {},
                relatedBlogs: dataDetail?.related_blogs || [],
            },
        };
    } catch (error) {
        console.error('Error fetching blog:', error);
        return {
            notFound: true,
        };
    }
};

export default SlugBlogComponent