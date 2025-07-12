import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { configImageURL } from '@/infrastructure/helper/helper';
type Props = {
    title: string
    dataList: Array<any>
}
const CategoryShop = (props: Props) => {
    const { title, dataList } = props;
    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {
                            dataList.map((brand) => (
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
}


export default CategoryShop;
