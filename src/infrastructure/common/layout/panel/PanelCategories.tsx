import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Constants from '@/core/common/constants';
import { useRecoilValue } from 'recoil';
import { CategoryProductState } from '@/core/atoms/category/categoryState';

const { SubMenu } = Menu;


const PanelCategories = () => {

    const categoryProduct = useRecoilValue(CategoryProductState).data
    return (
        <Menu
            mode="inline"
            onOpenChange={() => { }}>
            {categoryProduct.map(category => (
                <Menu.Item key={category.id}>
                    <a href={`/product?category_id=${category.id}`}>
                        {category.name}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default PanelCategories;
