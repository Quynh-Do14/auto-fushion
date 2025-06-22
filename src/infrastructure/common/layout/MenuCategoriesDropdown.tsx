import React from 'react';
import Menu from '../menu/Menu';
import Constants from '@/core/common/constants';
import { useRecoilValue } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';

const MenuCategoriesDropdown = () => {
    const productCategory = useRecoilValue(CategoryProductState).data
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Danh mục sản phẩm</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={Constants.Menu.PublicList}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
