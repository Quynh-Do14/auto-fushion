import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    brand: any[]
    setBrandId: Function
    brandId: string
    loading: boolean
}
const WidgetProductFilterBrands = (props: Props) => {
    const { brand, setBrandId, brandId, loading } = props;

    const onSelectCategory = (item: any) => {
        setBrandId(String(item.id))
    }
    let categoriesView;
    if (!loading) {
        if (brand && brand.length > 0) {
            const items = brand.map((item) => (
                <li
                    onClick={() => onSelectCategory(item)}
                    key={item.id}
                    className={String(item.id) === brandId ? 'active' : ''}>
                    <Link href={`/product?brand_id=${item.id}`}>{item.name}</Link>
                </li>
            ));
            categoriesView =
                <ul className="ps-list--categories">
                    <li >
                        <Link href={`/product`}>Tất cả</Link>
                    </li>
                    {items}
                </ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Thương hiệu</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetProductFilterBrands;
