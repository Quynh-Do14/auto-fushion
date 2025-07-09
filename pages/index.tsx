import type { NextPage } from 'next'
import HomeDefaultBanner from './home/HomeDefaultBanner'
import HomeAdsColumns from './home/HomeAdsColumns'
import HomeDefaultProductListing from './home/HomeDefaultProductListing'
import HomeDefaultTopCategories from './home/HomeDefaultTopCategories'
import MainLayoutPublic from '@/infrastructure/common/layout/MainLayout'
import BreadCrumb from '@/infrastructure/common/breadcrumb/BreadCrumb'
import HomeDefaultBrand from './home/HomeDefaultBrand'

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
  return (
    <main id="homepage-1">
      <MainLayoutPublic>
        <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
        <HomeDefaultBanner />
        {/* <HomeAdsColumns /> */}
        <HomeDefaultTopCategories />
        <HomeDefaultBrand />
        <HomeDefaultProductListing
          title="Sản phẩm nổi bật"
        />
      </MainLayoutPublic>
    </main>
  )
}

export default Home
