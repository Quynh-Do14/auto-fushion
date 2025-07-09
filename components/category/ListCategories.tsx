import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { configImageURL } from '@/infrastructure/helper/helper';
import Image from 'next/image';
type Props = {
    title: string
    dataList: Array<any>
}
const ListCategories =  (props: Props) => {
    const { title, dataList } = props;
    // const [listCategory, setListCategory] = useState<Array<any>>([])
    // const [total, setTotal] = useState<number>(0);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [pageSize, setPageSize] = useState<number>(10);
    // const [loading, setLoading] = useState<boolean>(false);

    // const onGetListCategoryAsync = async ({ name = "", size = pageSize, page = currentPage }) => {
    //     const param = {
    //         page: page,
    //         size: size,
    //         keyword: name,
    //     }
    //     try {
    //         await categoryProductService.GetCategory(
    //             param,
    //             setLoading
    //         ).then((res) => {
    //             setListCategory(res.data)
    //             setTotal(res.totalElements)
    //         })
    //     }
    //     catch (error) {
    //         console.error(error)
    //     }
    // }
    // const onSearch = async (name = "", size = pageSize, page = 1,) => {
    //     await onGetListCategoryAsync({ name: name, size: size, page: page, });
    // };

    // useEffect(() => {
    //     onSearch().then(_ => { });
    // }, []);
    return (
        < div className="ps-shop-categories">
            <div className="ps-block__header">
                <h3>{title}</h3>
            </div>
            <div className="row align-content-lg-stretch">
                {dataList.map((category) => (
                    <div
                        className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 "
                        key={category.id}>
                        <Link href={`/product?category_id=${category.id}`}>
                            <div className="ps-block--category-2" data-mh="categories">
                                <div className="ps-block__thumbnail">
                                    <Image
                                        width={200}
                                        height={200}
                                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                        src={configImageURL(category.image)}
                                        alt={category.name}
                                    />
                                </div>

                                <div className="ps-block__content">
                                    <h4>{category.name}</h4>
                                    <ul className='text-truncate-2'>
                                        {category.description &&
                                            <li>{category.description}</li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}



export default ListCategories;
