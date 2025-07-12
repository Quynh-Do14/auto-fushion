import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import brandService from '@/infrastructure/repository/brand/brand.service';
import Image from 'next/image';
import { configImageURL } from '@/infrastructure/helper/helper';

const HomeDefaultBrand = () => {
    const [listBrand, setListBrand] = useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(false);

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

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Thương hiệu</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
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
                                            // width={200}
                                            // height={60}
                                            style={{ objectFit: 'cover' }}
                                            src={configImageURL(brand.image)}
                                            alt={brand.name}
                                        />
                                        {/* <p>{brand.name}</p> */}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBrand;
