import React, { useState } from 'react';
import { Drawer } from 'antd';
import PanelCategories from './panel/PanelCategories';
import PanelSearch from './panel/PanelSearch';
import PanelMenu from './panel/PanelMenu';

interface NavigationListProps {
    // Thêm props từ mapStateToProps nếu cần
}

const NavigationList: React.FC<NavigationListProps> = () => {
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [categoriesDrawer, setCategoriesDrawer] = useState(false);

    const handleDrawerClose = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
    };

    const handleShowMenuDrawer = () => {
        setMenuDrawer(!menuDrawer);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
    };

    const handleShowCartDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(false);
    };

    const handleShowSearchDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(!searchDrawer);
        setCategoriesDrawer(false);
    };

    const handleShowCategoriesDrawer = () => {
        setMenuDrawer(false);
        setSearchDrawer(false);
        setCategoriesDrawer(!categoriesDrawer);
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
                        <h3>Search</h3>
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
                        <h3>Categories</h3>
                        <span className="ps-panel__close" onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelCategories />
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
                    className={`navigation__item ${categoriesDrawer ? 'active' : ''}`}
                    onClick={handleShowCategoriesDrawer}>
                    <i className="icon-list4"></i>
                    <span> Categories</span>
                </a>
                <a
                    className={`navigation__item ${searchDrawer ? 'active' : ''}`}
                    onClick={handleShowSearchDrawer}>
                    <i className="icon-magnifier"></i>
                    <span> Search</span>
                </a>
            </div>
        </div>
    );
};

export default NavigationList;
