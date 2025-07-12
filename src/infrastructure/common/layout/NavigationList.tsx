import React, { useState } from 'react';
import { Drawer } from 'antd';
import PanelCategories from './panel/PanelCategories';
import PanelSearch from './panel/PanelSearch';
import PanelMenu from './panel/PanelMenu';
import avatar from '@/asset/img/avatar.png'
import PanelBrand from './panel/PanelBrand';
import { ROUTE_PATH } from '@/core/common/appRouter';
import PanelAccount from './panel/PanelAccount';

interface NavigationListProps {
    // Thêm props từ mapStateToProps nếu cần
}

const NavigationList: React.FC<NavigationListProps> = () => {
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [categoriesDrawer, setCategoriesDrawer] = useState(false);
    const [accountDrawer, setAccountDrawer] = useState(false);

    const handleDrawerClose = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
        setAccountDrawer(false);
    };

    const handleShowMenuDrawer = () => {
        setMenuDrawer(!menuDrawer);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
        setAccountDrawer(false);
    };

    const handleShowAccountDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
        setAccountDrawer(!accountDrawer);
    };

    const handleShowSearchDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(!searchDrawer);
        setCategoriesDrawer(false);
        setAccountDrawer(false);
    };

    const handleShowCategoriesDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(!categoriesDrawer);
        setAccountDrawer(false);
    };

    return (
        <div className="navigation--list">
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                open={menuDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Menu</h3>
                        <span className="ps-panel__close" onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelMenu />
                    </div>
                </div>
            </Drawer>

            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                open={searchDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Tìm kiếm</h3>
                        <span className="ps-panel__close" onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelSearch />
                    </div>
                </div>
            </Drawer>

            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                open={categoriesDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Danh mục & Thương hiệu sản phẩm</h3>
                        <span className="ps-panel__close" onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelCategories />
                        <PanelBrand />
                    </div>
                </div>
            </Drawer>

            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                open={accountDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Tài khoản</h3>
                        <span className="ps-panel__close" onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelAccount />
                    </div>
                </div>
            </Drawer>

            <div className="navigation__content">
                <a
                    className={`navigation__item ${menuDrawer ? 'active' : ''}`}
                    onClick={handleShowMenuDrawer}>
                    <i className="icon-menu"></i>
                    <span> Menu</span>
                </a>
                <a
                    href={ROUTE_PATH.PRODUCT}
                    className={`navigation__item ${categoriesDrawer ? 'active' : ''}`}
                // onClick={handleShowCategoriesDrawer}
                >
                    <i className="icon-list4"></i>
                    <span> Sản phẩm</span>
                </a>
                <a
                    className={`navigation__item ${searchDrawer ? 'active' : ''}`}
                    onClick={handleShowSearchDrawer}>
                    <i className="icon-magnifier"></i>
                    <span> Tìm kiếm</span>
                </a>
                <a
                    className={`navigation__item ${searchDrawer ? 'active' : ''}`}
                    onClick={handleShowAccountDrawer}>
                    <span>
                        <img src={avatar.src} alt="avatar" className="user-avatar" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default NavigationList;
