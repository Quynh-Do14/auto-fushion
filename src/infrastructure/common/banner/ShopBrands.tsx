import React from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { BrandState } from '@/core/atoms/brand/brandState';
import { configImageURL } from '@/infrastructure/helper/helper';
import Image from 'next/image';

const ShopBrands = () => {
    const brand = useRecoilValue(BrandState).data
    return (
        <div className="ps-shop-brand">

            {
                brand && brand.length > 0 && brand.map((item) => {
                    return (
                        <Link href={`/product?brand_id=${item.id}`}>
                            <a>
                                <Image
                                    src={configImageURL(item.image)}
                                    alt={item.name}
                                    width={150}
                                    height={80}
                                    style={{ objectFit: 'contain' }}
                                />
                            </a>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default ShopBrands;
