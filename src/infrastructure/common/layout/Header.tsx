import { stickyHeader } from '@/infrastructure/utilities/common-helpers';
import Link from 'next/link';
import React, { useEffect } from 'react';
import logo from "@/asset/img/logo.png"
import Image from 'next/image';
import SearchHeader from './SearchHeader';
import NavigationDefault from './Navigation';
import HeaderActions from './HeaderActions';
const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Link href={"/"}>
                            <div className="ps-logo">
                                <img
                                    src={logo.src}
                                    alt="autofusion"
                                    style={{
                                        width: '100%',
                                        maxWidth: '280px',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>
            <NavigationDefault />
        </header>
    );
};

export default HeaderDefault;
