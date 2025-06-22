import Slider from 'react-slick';
import Link from 'next/link';
import NextArrow from '@/infrastructure/common/carousel/NextArrow';
import PrevArrow from '@/infrastructure/common/carousel/PrevArrow';
import Promotion from '@/infrastructure/common/media/Promotion';
import banner from '@/asset/img/banner.jpg'
const HomeDefaultBanner = () => {
    const bannerItems = [
        banner,
        banner,
        banner,
        banner,
        banner,
    ]

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    if (bannerItems) {
        const carouseItems = bannerItems.map((item, index) => (
            <div className="slide-item" key={index}>
                <Link href="/shop">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.src})`,
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
                    <Promotion
                        link="/shop"
                        image={banner}
                    />
                    <Promotion
                        link="/shop"
                        image={banner}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
