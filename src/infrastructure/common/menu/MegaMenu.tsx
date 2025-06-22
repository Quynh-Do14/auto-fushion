import React from 'react';
import Link from 'next/link';

interface MegaItem {
    text: string;
    url: string;
}

interface MegaColumn {
    heading: string;
    megaItems: MegaItem[];
}

interface MenuItem {
    url: string;
    text: string;
    icon?: string;
    megaContent?: MegaColumn[];
}

type Props = {
    source: MenuItem;
}

const MegaMenu = (props: Props) => {
    const { source } = props
    const megaContentView = source.megaContent?.map((item) => (
        <div className="mega-menu__column" key={item.heading}>
            <h4>{item.heading}</h4>
            <ul className="mega-menu__list">
                {item.megaItems.map((subItem) => (
                    <li key={`${subItem.text}-${subItem.url}`}>
                        <Link href={subItem.url} passHref legacyBehavior>
                            <a>{subItem.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ));

    return (
        <li className={`menu-item-has-children ${source.megaContent ? 'has-mega-menu' : ''}`}>
            <Link
                href={source.url || '/'}
                passHref
                legacyBehavior
            >
                <a>
                    {source.icon && <i className={source.icon}></i>}
                    {source.text}
                </a>
            </Link>
            {source.megaContent && (
                <div className="mega-menu">
                    {megaContentView}
                </div>
            )}
        </li>
    );
};

export default MegaMenu;