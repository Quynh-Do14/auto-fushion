import React from 'react';
import PrevArrow from '../common/carousel/PrevArrow';
import NextArrow from '../common/carousel/NextArrow';

export const carouselStandard = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    prevArrow: <PrevArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const carouselInSidebar = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    prevArrow: <PrevArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const carouselFullwidth = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    prevArrow: <PrevArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    lazyload: true,
    responsive: [
        {
            breakpoint: 1750,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
            },
        },

        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
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

export const carouselSingle = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />,
    prevArrow: <PrevArrow className={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />
};
