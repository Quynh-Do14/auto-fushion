import React from 'react';
import Link from 'next/link';
import banner from '@/asset/img/banner.jpg'
import Image from 'next/image';

type Props = {
    link: string;
    image: any;
};

const Promotion = (props: Props) => {
    const { link, image } = props;

    return (
        <Link href={link || '/shop'}>
            <a className="ps-collection">
                <img
                    src={image || banner}
                    alt="autofusion"
                    width={400}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
            </a>
        </Link>
    );
};

export default Promotion;