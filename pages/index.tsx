import type { NextPage } from 'next'
import HomeDefaultBanner from './home/HomeDefaultBanner'
import HomeAdsColumns from './home/HomeAdsColumns'
import HomeDefaultProductListing from './home/HomeDefaultProductListing'
import HomeDefaultTopCategories from './home/HomeDefaultTopCategories'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb'
import HomeDefaultBrand from './home/HomeDefaultBrand'
import ShopBanner from '@/infrastructure/common/banner/ShopBanner'
import SiteFeatures from './home/SiteFeatures'
import { PageLoading } from '@/infrastructure/common/loader/loadingPage'
import { useState } from 'react'

const Home: NextPage = () => {
  const breadCrumb = [
    {
      text: 'Trang chủ',
      url: '/',
    },
    {
      text: '',
    },
  ];
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main id="homepage-1">
      <MainLayoutPublic>
        <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
        <HomeDefaultBanner
          setLoading={setLoading}
        />
        <div className='ps-container content-homepage'>
          <h1>TRUNG TÂM PHỤ KIỆN ĐỒ CHƠI XE HƠI CAO CẤP AUTOFUSION</h1>
          <h2>AutoFusion – nơi hội tụ đam mê công nghệ, sự tận tâm và cam kết bền vững dành cho khách hàng. Với triết lý “lấy khách hàng làm trọng tâm”, chúng tôi không ngừng nỗ lực nâng cao trải nghiệm dịch vụ, lấy uy tín làm cam kết và chất lượng làm niềm tin để xây dựng mối quan hệ bền vững với mỗi khách hàng.</h2>
        </div>
        <SiteFeatures />
        {/* <div className="ps-container">
          <ShopBanner />
        </div> */}
        <HomeDefaultBrand
          setLoading={setLoading}
        />
        {/* <HomeAdsColumns /> */}
        <HomeDefaultTopCategories
          setLoading={setLoading}
        />
        <HomeDefaultProductListing
          title="Sản phẩm nổi bật"
          loading={loading}
          setLoading={setLoading}
        />
        <PageLoading isLoading={loading} />
      </MainLayoutPublic>
    </main>
  )
}

export default Home
