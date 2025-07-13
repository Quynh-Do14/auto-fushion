import Slider from 'react-slick';
import Link from 'next/link';
import NextArrow from '@/infrastructure/common/carousel/NextArrow';
import PrevArrow from '@/infrastructure/common/carousel/PrevArrow';
import Promotion from '@/infrastructure/common/media/Promotion';
import banner from '@/asset/img/banner.jpg'
import { useEffect, useState } from 'react';
import Constants from '@/core/common/constants';
import bannerService from '@/infrastructure/repository/banner/banner.service';
import { configImageURL } from '@/infrastructure/helper/helper';
const HomeDefaultBanner = () => {
    const [listBanner, setListBanner] = useState<Array<any>>([]);
    const [listSub, setListSub] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const onGetListBannerAsync = async () => {
        const paramMain = {
            type: Constants.BannerType.BannerTypeConfig.Main.value
        }
        const paramSub = {
            type: Constants.BannerType.BannerTypeConfig.Sub.value,
            limit: 2
        }
        try {
            await bannerService.GetBanner(
                paramMain,
                setLoading
            ).then((res) => {
                const listImg = res.data.map((item: any) => item.image)
                setListBanner(listImg);
            })
        }
        catch (error) {
            console.error(error)
        }

        try {
            await bannerService.GetBanner(
                paramSub,
                setLoading
            ).then((res) => {
                const listImg = res.data.map((item: any) => item.image)
                setListSub(listImg);
            })
        }
        catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        onGetListBannerAsync().then(_ => { });
    }, []);

    const bannerItems = [
        banner,
    ]

const carouselSetting = {
    dots: false,
    infinite: true,
    speed: 750,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // Tự động chạy
    autoplaySpeed: 3000,      // Chuyển ảnh mỗi 3 giây
    nextArrow: <NextArrow
        className={''}
        onClick={() => { }}
    />,
    prevArrow: <PrevArrow
        className={''}
        onClick={() => { }}
    />,
};

    // Views
    let mainCarouselView;
    if (listBanner) {
        const carouseItems = listBanner.map((item, index) => (
            <div className="slide-item" key={index}>
                <Link href="/product">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${configImageURL(item)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">{mainCarouselView}</div>
                <div className="ps-section__right">
                    {
                        listSub.map((item, index) => (
                            <Promotion
                                key={index}
                                link="/product"
                                image={configImageURL(item)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
