import { stickyHeader } from '@/infrastructure/utilities/common-helpers';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from "@/asset/img/logo.png"
import Image from 'next/image';
import SearchHeader from './SearchHeader';
import NavigationDefault from './Navigation';
import HeaderActions from './HeaderActions';
import DialogConfirmCommon from '../modal/dialogConfirm';
import authService from '@/infrastructure/repository/auth/auth.service';
import { ROUTE_PATH } from '@/core/common/appRouter';
import AccountQuickLinks from './Acount';
import { isTokenStoraged } from '@/infrastructure/utilities/storage';
const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);
    const token = isTokenStoraged()
    const [isOpenModalLogout, setIsOpenModalLogout] = useState<boolean>(false)
    const openModalLogout = () => {
        setIsOpenModalLogout(true);
    };

    const closeModalLogout = () => {
        setIsOpenModalLogout(false);
    };

    const handleLogout = async () => {
        setIsOpenModalLogout(false);
        try {
            await authService.logout(() => { })
                .then(() => {
                    window.location.href = ROUTE_PATH.HOMEPAGE;
                })
        } catch (error) {
            console.error(error);
        }
    }
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
                        <AccountQuickLinks
                            isLoggedIn={token}
                            openModalLogout={openModalLogout}
                        />
                    </div>
                </div>
            </div>
            <NavigationDefault />
            <DialogConfirmCommon
                message={'Bạn có muốn đăng xuất khỏi hệ thống??'}
                titleCancel={'Bỏ qua'}
                titleOk={'Đăng xuất'}
                visible={isOpenModalLogout}
                handleCancel={closeModalLogout}
                handleOk={handleLogout}
                title={'Đăng xuất khỏi hệ thống'}
            />
        </header>
    );
};

export default HeaderDefault;
