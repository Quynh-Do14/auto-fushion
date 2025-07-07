import React from 'react';
import Link from 'next/link';
import MenuDropdown from './MenuDropdown';
import MegaMenu from './MegaMenu';
import { ROUTE_PATH } from '@/core/common/appRouter';

type Props = {
    source: any[];
    className: string;
    brand?: boolean
};
const Menu = (props: Props) => {
    const { source, className, brand = false } = props;
    // Views
    let menuView;
    if (brand) {
        if (source) {
            menuView = source.map((item, index) => {
                if (item.subMenu) {
                    return <MenuDropdown source={item} key={index} />;
                } else if (item.megaContent) {
                    return <MegaMenu source={item} key={index} />;
                } else {
                    return (
                        <li key={index}>
                            <Link href={`${ROUTE_PATH.PRODUCT}?brand=${item.id}`}>
                                <a>
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    );
                }
            });
        } else {
            menuView = (
                <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        No menu item.
                    </a>
                </li>
            );
        }
        return <ul className={className}>{menuView}</ul>;
    }
    else {
        if (source) {
            menuView = source.map((item) => {
                if (item.subMenu) {
                    return <MenuDropdown source={item} key={item.text} />;
                } else if (item.megaContent) {
                    return <MegaMenu source={item} key={item.text} />;
                } else {
                    return (
                        <li key={item.text}>
                            <Link href={item.url}>
                                <a>
                                    {item.icon && <i className={item.icon}></i>}
                                    {item.text}
                                </a>
                            </Link>
                        </li>
                    );
                }
            });
        } else {
            menuView = (
                <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        No menu item.
                    </a>
                </li>
            );
        }
        return <ul className={className}>{menuView}</ul>;
    }

};

export default Menu;
