import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import brandService from '@/infrastructure/repository/brand/brand.service';
import Image from 'next/image';
import { configImageURL } from '@/infrastructure/helper/helper';
import NextArrow from '@/infrastructure/common/carousel/NextArrow';
import PrevArrow from '@/infrastructure/common/carousel/PrevArrow';
import Slider from 'react-slick';
type Props = {
    setLoading: Function
}
const HomeDefaultBrand = (props: Props) => {
    const { setLoading } = props;
    const [listBrand, setListBrand] = useState<Array<any>>([])

    const onGetListBrandAsync = async () => {
        const param = {
            page: 1,
            size: 6,
        }
        try {
            await brandService.GetBrand(
                param,
                setLoading
            ).then((res) => {
                setListBrand(res.data)
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onGetListBrandAsync().then(_ => { });
    }, []);

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
                        <h3>Tìm kiếm sản phẩm theo thương hiệu</h3>
                    </div>
                    <div className="ps-section__content">
                        {/* <div className="row">
                        {
                            listBrand.map((brand) => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 " style={{ marginBottom: 30 }}>
                                    <div className="ps-block--category"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Link href={`/product?brand_id=${brand.id}`}>
                                            <a></a>
                                        </Link>
                                        <img
                                            style={{ objectFit: 'cover' }}
                                            src={configImageURL(brand.image)}
                                            alt={brand.name}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}
                        <Slider
                            {...setting}
                            infinite={listBrand.length > 7}
                            className="ps-carousel outside brand-slider"
                        >
                            {listBrand.map((brand, index) => (
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
};

export default HomeDefaultBrand;
