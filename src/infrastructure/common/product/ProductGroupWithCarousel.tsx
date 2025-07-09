import { carouselFullwidth, carouselStandard, carouselInSidebar, carouselSingle } from '@/infrastructure/utilities/carousel-helpers';
import React from 'react';
import Slider from 'react-slick';
import Product from './Product';
import ProductSimple from './ProductSimple';
type Props = {
    products: any[]
    type: "fullwidth" | "carouselInSidebar" | "carouselStandard" | "carouselSingle"
}
export const ProductGroupWithCarousel = (props: Props) => {
    const { products, type } = props;

    if (type === 'fullwidth') {
        return (
            <Slider
                {...carouselFullwidth}
                infinite={products.length > 7 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div className='ps-carousel-item' key={item.id}>
                        <ProductSimple product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
    else if (type === 'carouselInSidebar') {
        return (
            <Slider
                {...carouselInSidebar}
                infinite={products.length > 5 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div className='ps-carousel-item' key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
    else if (type === 'carouselStandard') {
        return (
            <Slider
                {...carouselStandard}
                infinite={products.length > 5 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div className='ps-carousel-item' key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
    else if (type === 'carouselSingle') {
        return (
            <Slider
                {...carouselSingle}
                infinite={products.length > 5 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div className='ps-carousel-item' key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
};


