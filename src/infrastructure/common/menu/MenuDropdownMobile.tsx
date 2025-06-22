import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const { SubMenu } = Menu;

interface MenuItem {
    url: string;
    text: string;
    type?: 'dynamic' | 'static';
    endPoint?: string;
    alias?: string;
    subMenu?: MenuItem[];
    subClass?: string;
}

type Props = {
    menuData: MenuItem;
}

const MenuDropdownMobile = (props: Props) => {
    const { menuData } = props
    const renderLink = () => {
        if (menuData.type === 'dynamic') {
            return (
                <Link
                    href={`${menuData.url}/[pid]`}
                    as={`${menuData.url}/${menuData.endPoint}`}
                    passHref
                    legacyBehavior
                >
                    <a>{menuData.text}</a>
                </Link>
            );
        }
        return (
            <Link
                href={menuData.url}
                as={menuData.alias}
                passHref
                legacyBehavior
            >
                <a>{menuData.text}</a>
            </Link>
        );
    };

    return (
        <SubMenu
            key={menuData.url} // Better key using url instead of static 'sub1'
            title={renderLink()}
            popupClassName={menuData.subClass}
        >
            {menuData.subMenu?.map((subMenuItem, index) => (
                <MenuDropdownMobile
                    menuData={subMenuItem}
                    key={`${subMenuItem.url}-${index}`} // Better key combination
                />
            ))}
        </SubMenu>
    );
};

export default MenuDropdownMobile;