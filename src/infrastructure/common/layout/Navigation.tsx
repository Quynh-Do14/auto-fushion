import React, { Component } from 'react';
import Link from 'next/link';
import Menu from '../menu/Menu';
import menuData from '../data/menu.json';
import Constants from '@/core/common/constants';
import MenuCategoriesDropdown from './MenuCategoriesDropdown';

const NavigationDefault = () => {

    return (
        <nav className="navigation">
            <div className="ps-container">
                <div className="navigation__left">
                    <MenuCategoriesDropdown />
                </div>
                <div className="navigation__right">
                    <Menu
                        source={Constants.Menu.PublicList}
                        className="menu"
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavigationDefault;
