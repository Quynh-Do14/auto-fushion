import { carouselFullwidth, carouselStandard } from '@/infrastructure/utilities/carousel-helpers';
import React from 'react';
import Slider from 'react-slick';
import Product from './Product';
type Props = {
    products: any[]
    type: string
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
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    } else {
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
};


