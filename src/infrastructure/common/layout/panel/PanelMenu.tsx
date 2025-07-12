import React, { useState, useCallback } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Constants from '@/core/common/constants';


const PanelMenu = () => {

    const renderMenuItems = (items: any[]) =>
        items.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    <Link href={item.url}>
                        <a style={{ display: 'block' }}>{item.text}</a>
                    </Link>
                </Menu.Item>
            );
        });

    return (
        <Menu
            mode="inline"
            className="menu--mobile-2">
            {renderMenuItems(Constants.Menu.PublicList)}
        </Menu>
    );
};

export default PanelMenu;
