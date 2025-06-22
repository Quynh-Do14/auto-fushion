import React from 'react';
import Link from 'next/link';

interface MenuItem {
    url: string;
    text: string;
    subMenu?: MenuItem[];
    subClass?: string;
}

type Props = {
    source: MenuItem;
}

const MenuDropdown = (props: Props) => {
    const { source } = props;
    return (
        <li className={`menu-item-has-children ${source.subMenu ? 'dropdown' : ''}`}>
            <Link href={source.url} passHref legacyBehavior>
                <a>{source.text}</a>
            </Link>
        </li>
    );
};

export default MenuDropdown;