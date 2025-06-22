import React, { useState, useCallback } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Constants from '@/core/common/constants';

const { SubMenu } = Menu;

interface MenuItem {
    text: string;
    url: string;
    alias?: string;
    type?: 'dynamic' | 'static';
    endPoint?: string;
    subMenu?: MenuItem[];
    megaContent?: {
        heading: string;
        megaItems: MenuItem[];
    }[];
}

interface PanelMenuProps {
    // Thêm props từ Redux nếu cần
}

const PanelMenu: React.FC<PanelMenuProps> = () => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']; // Nếu cần mở rộng

    const onOpenChange = useCallback(
        (keys: string[]) => {
            const latestOpenKey = keys.find((key) => !openKeys.includes(key));
            if (latestOpenKey && rootSubmenuKeys.includes(latestOpenKey)) {
                setOpenKeys([latestOpenKey]);
            } else {
                setOpenKeys(keys);
            }
        },
        [openKeys]
    );

    const renderMenuItems = (items: MenuItem[]) =>
        items.map((item) => {
            if (item.subMenu) {
                return (
                    <SubMenu
                        key={item.text}
                        title={
                            <Link href={item.url}>
                                <span>{item.text}</span>
                            </Link>
                        }>
                        {item.subMenu.map((subItem) => (
                            <Menu.Item key={subItem.text}>
                                <Link href={subItem.url}>
                                    <span>{subItem.text}</span>
                                </Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                );
            } else if (item.megaContent) {
                return (
                    <SubMenu
                        key={item.text}
                        title={
                            <Link href={item.url}>
                                <span>{item.text}</span>
                            </Link>
                        }>
                        {item.megaContent.map((megaItem) => (
                            <SubMenu
                                key={megaItem.heading}
                                title={<span>{megaItem.heading}</span>}>
                                {megaItem.megaItems.map((megaSubItem) => (
                                    <Menu.Item key={megaSubItem.text}>
                                        <Link href={item.url}>
                                            <span>{megaSubItem.text}</span>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        ))}
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.text}>
                        {item.type === 'dynamic' ? (
                            <Link
                                href={`${item.url}/[pid]`}
                                as={`${item.url}/${item.endPoint}`}>
                                <span>{item.text}</span>
                            </Link>
                        ) : (
                            <Link href={item.url} as={item.alias}>
                                <span>{item.text}</span>
                            </Link>
                        )}
                    </Menu.Item>
                );
            }
        });

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            className="menu--mobile-2">
            {renderMenuItems(Constants.Menu.PublicList)}
        </Menu>
    );
};

export default PanelMenu;
