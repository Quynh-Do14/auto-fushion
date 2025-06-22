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
                <Image
                    src={image || banner}
                    alt="martfury"
                />
            </a>
        </Link>
    );
};

export default Promotion;