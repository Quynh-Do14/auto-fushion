import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import React from 'react'
import MainContent from '../../../components/blog/slug/MainContent'

const SlugBlogComponent = () => {
    return (
        <MainLayoutPublic>
            <MainContent />
            {/* <div className="container">
                <RelatedPosts />
                <PostComments />
            </div> */}
        </MainLayoutPublic>
    )
}

export default SlugBlogComponent