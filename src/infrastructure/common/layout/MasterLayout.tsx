import React, { useEffect } from 'react';
import { BackTop } from 'antd';
import PageLoader from '../loader/PageLoader';
import NavigationList from './NavigationList';

const MasterLayout = ({ children }: any) => {

    return (
        <>
            {children}
            {/* <PageLoader /> */}
            <NavigationList />
            <BackTop>
                <button className="ps-btn--backtop">
                    <i className="icon-arrow-up" />
                </button>
            </BackTop>
        </>
    );
};

export default MasterLayout;
