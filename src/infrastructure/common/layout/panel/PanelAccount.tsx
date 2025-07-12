import React, { useState } from 'react'
import styles from '@/asset/css/page/Account.module.css'
import ButtonCommon from '../../button/ButtonCommon';
import DialogConfirmCommon from '../../modal/dialogConfirm';
import authService from '@/infrastructure/repository/auth/auth.service';
import { ROUTE_PATH } from '@/core/common/appRouter';
import { useRecoilValue } from 'recoil';
import { ProfileState } from '@/core/atoms/profile/profileState';
const PanelAccount = () => {
    const profile = useRecoilValue(ProfileState).data
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
        <div className={styles.sidebar}>
            {/* <ul className={styles.list}>
                {userInfo.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <a href="#" className={styles.link}>{item}</a>
                    </li>
                ))}
            </ul> */}
            <ButtonCommon
                onClick={handleLogout}
                title={'Đăng xuất'}
                variant={'ps-btn--fullwidth'}
            />

            <DialogConfirmCommon
                message={'Bạn có muốn đăng xuất khỏi hệ thống??'}
                titleCancel={'Bỏ qua'}
                titleOk={'Đăng xuất'}
                visible={isOpenModalLogout}
                handleCancel={closeModalLogout}
                handleOk={handleLogout}
                title={'Đăng xuất khỏi hệ thống'}
            />
        </div>
    )
}

export default PanelAccount