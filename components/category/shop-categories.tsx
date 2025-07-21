import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { configImageURL } from '@/infrastructure/helper/helper';
import Slider from 'react-slick';
import NextArrow from '@/infrastructure/common/carousel/NextArrow';
import PrevArrow from '@/infrastructure/common/carousel/PrevArrow';
type Props = {
    title: string
    dataList: Array<any>
}
const CategoryShop = (props: Props) => {
    const { title, dataList } = props;
    const setting = {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        lazyload: true,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                },
            },

            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="brand-container">
            <div className="ps-product-list">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>{title}</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...setting}
                            infinite={dataList.length > 7}
                            className="ps-carousel outside brand-slider"
                        >
                            {dataList.map((brand, index) => (
                                <div className="brand-slide" key={index}>
                                    <img
                                        src={configImageURL(brand.image)}
                                        alt={brand.name}
                                        className="brand-image"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CategoryShop;
