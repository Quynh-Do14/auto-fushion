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
        <div className="ps-block--categories-box">
            <div className="ps-block__header">
                <h3>{title}</h3>
            </div>
            <div className="ps-block__content">
                {
                    dataList.map(category => {

                        return (
                            <div className="ps-block__item" key={category.text}>
                                <Link href={`/product?brand_id=${category.id}`}>
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <Image
                                    width={300}
                                    height={150}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        maxHeight: '200px' // giới hạn chiều cao nếu muốn
                                    }}
                                    src={configImageURL(category.image)}
                                    alt={category.name}
                                />
                                <p>{category.name} </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}


export default CategoryShop;
