import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
    productCategory: any[]
    setCategoryId: Function
    categoryId: string
    loading: boolean
}
const WidgetProductFilterCategories = (props: Props) => {
    const { productCategory, setCategoryId, categoryId, loading } = props;

    const onSelectCategory = (item: any) => {
        setCategoryId(String(item.id))
    }
    let categoriesView;
    if (!loading) {
        if (productCategory && productCategory.length > 0) {
            const items = productCategory.map((item) => (
                <li
                    onClick={() => onSelectCategory(item)}
                    key={item.id}
                    className={String(item.id) === categoryId ? 'active' : ''}>
                    <Link href={`/product?category_id=${item.id}`}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categories</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetProductFilterCategories;
