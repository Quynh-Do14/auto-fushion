import React from 'react';
import Menu from '../menu/Menu';
import { useRecoilValue } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';
import { BrandState } from '@/core/atoms/brand/brandState';

const MenuCategoriesDropdown = () => {
    const productCategory = useRecoilValue(CategoryProductState).data
    const brand = useRecoilValue(BrandState).data

    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Thương hiệu sản phẩm</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={brand}
                    className="menu--dropdown"
                    brand={true}
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
