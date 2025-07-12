import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Constants from '@/core/common/constants';
import { useRecoilValue } from 'recoil';
import { BrandState } from '@/core/atoms/brand/brandState';

const { SubMenu } = Menu;

const PanelBrand = () => {

    const brands = useRecoilValue(BrandState).data
    return (
        <Menu
            mode="inline"
            // openKeys={() => { }}
            onOpenChange={() => { }}>
            {brands.map(brand => (
                <Menu.Item key={brand.id}>
                    <a href={`/product?brand_id=${brand.id}`}>
                        {brand.name}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default PanelBrand;
