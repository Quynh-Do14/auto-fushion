import React from 'react';
import Link from 'next/link';
type Props = {
    categoryBlogState: any[]
    setCategoryId: (item: any) => void
    categoryId: string
}
const WidgetBlogCategories = (props: Props) => {
    const {
        categoryBlogState,
        setCategoryId,
        categoryId,
    } = props;

    const categoriesView = categoryBlogState.map((item, index) => (
        <li key={index}
            onClick={() => setCategoryId(item)}
        >
            <Link href={`/blog?category_id=${item.id}`}>
                <a>{item.name}</a>
            </Link>
        </li>
    ));

    return (
        <aside className="widget widget--blog widget--categories">
            <h3 className="widget__title">Danh mục tin tức</h3>
            <div className="widget__content">
                <ul>{categoriesView}</ul>
            </div>
        </aside>
    );
};

export default WidgetBlogCategories;
