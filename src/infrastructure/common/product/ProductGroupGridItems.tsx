import { generateTempArray } from '@/infrastructure/utilities/common-helpers';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import SkeletonProduct from '../skeleton/SkeletonProduct';
import ProductSimple from './ProductSimple';

type Props = {
    products: any[]
    columns: number
    pageSize: number
    loading: boolean
}
const ProductGroupGridItems = (props: Props) => {
    const {
        products,
        columns,
        pageSize,
        loading
    } = props;

    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );


    function handleSetColumns() {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }

    useEffect(() => {
        handleSetColumns();
    }, [columns, pageSize]);

    // Views
    let productItemsView;

    if (!loading && products) {
        if (products.length > 0) {
            const items = products.map((item) => {
                return (
                    <div className={classes} key={item.id}>
                        <ProductSimple product={item} />
                    </div>
                );
            });
            productItemsView = <div className="row">{items}</div>;
        } else {
            productItemsView = <p>Không tìm thấy sản phẩm.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(columns * 2).map((item) => (
            <div className={classes} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return <div className="ps-shop-items">{productItemsView}</div>;
};

export default ProductGroupGridItems;
