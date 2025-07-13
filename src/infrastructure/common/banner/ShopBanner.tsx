import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
import { configImageURL } from '@/infrastructure/helper/helper';
import bannerService from '@/infrastructure/repository/banner/banner.service';
import Constants from '@/core/common/constants';
import Image from 'next/image';


const ShopBanner = () => {
    const [listBanner, setListBanner] = useState<Array<any>>([]);
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
    };

    useEffect(() => {
        onGetListBannerAsync().then(_ => { });
    }, []);
    const carouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="ps-shop-banner">
            <Slider {...carouselSetting} fade={true} className="ps-carousel">
                {
                    listBanner.map((item, index) => (
                        <div key={index} className="banner-slide">
                            <img
                                src={configImageURL(item)}
                                alt="autofusion"
                                className="banner-image"
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ShopBanner;
