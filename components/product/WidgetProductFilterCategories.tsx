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
    const router = useRouter();

    const onSelectCategory = (item: any) => {
        setCategoryId(String(item.id))
    }

    const routeParams = (key: string, value: string) => {
        const currentQuery = {
            ...router.query,
            [key]: value,
        };

        const sanitizedQuery: Record<string, string> = {};
        Object.entries(currentQuery).forEach(([k, v]) => {
            if (typeof v === 'string') {
                sanitizedQuery[k] = v;
            } else if (Array.isArray(v)) {
                sanitizedQuery[k] = v[0]; // hoặc join nếu muốn giữ nhiều giá trị
            } else if (v !== undefined) {
                sanitizedQuery[k] = String(v);
            }
        });

        const queryString = new URLSearchParams(sanitizedQuery).toString();
        return queryString;
    };

    let categoriesView;
    if (!loading) {
        if (productCategory && productCategory.length > 0) {
            const items = productCategory.map((item) => (
                <li
                    onClick={() => onSelectCategory(item)}
                    key={item.id}
                    className={String(item.id) === categoryId ? 'active' : ''}>
                    <Link href={`/product?${routeParams('category_id', item.id)}`}>{item.name}</Link>
                </li>
            ));
            categoriesView =
                <ul className="ps-list--categories">
                    <li >
                        <Link href={`/product?${routeParams('category_id', "")}`}>Tất cả</Link>
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
            <h4 className="widget-title">Danh mục</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetProductFilterCategories;
