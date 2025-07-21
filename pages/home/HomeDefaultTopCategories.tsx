import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import categoryProductService from '@/infrastructure/repository/category/categoryProduct.service';
import { configImageURL } from '@/infrastructure/helper/helper';
import Image from 'next/image';
type Props = {
    setLoading: Function
}
const HomeDefaultTopCategories = (props: Props) => {
    const { setLoading } = props;
    const [listCategory, setListCategory] = useState<Array<any>>([])

    const onGetListCategoryAsync = async () => {
        const param = {
            page: 1,
            size: 8,
        }
        try {
            await categoryProductService.GetCategory(
                param,
                setLoading
            ).then((res) => {
                setListCategory(res.data)
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        onGetListCategoryAsync().then(_ => { });
    }, []);
    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Danh mục nổi bật</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {
                            listCategory.map((category) => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" style={{ marginBottom: 30 }}>
                                    <div className="ps-block--category">
                                        <Link href={`/product?category_id=${category.id}`}>
                                            <a className="ps-block__overlay"></a>
                                        </Link>
                                        <Image
                                            width={200}
                                            height={200}
                                            src={configImageURL(category.image)}
                                            alt={category.name}
                                        />
                                        <p className='text-truncate-2'>{category.name}</p>
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

export default HomeDefaultTopCategories;
