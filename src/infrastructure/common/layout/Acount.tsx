import React from 'react';
import Link from 'next/link';
import { Dropdown, Menu, Avatar } from 'antd';
import { useRecoilValue } from 'recoil';
import { ProfileState } from '@/core/atoms/profile/profileState';
import { UserOutlined } from '@ant-design/icons';
import ButtonHref from '../button/ButtonHref';
import { ROUTE_PATH } from '@/core/common/appRouter';

type Props = {
  isLoggedIn: boolean;
  openModalLogout: () => void;
};

const AccountQuickLinks = ({ isLoggedIn, openModalLogout }: Props) => {
  const profile = useRecoilValue(ProfileState).data;

  if (!isLoggedIn || !profile) {
    return (
      <div className="account-actions">
        <ButtonHref
          href={ROUTE_PATH.LOGIN}
          title='Đăng nhập'
          variant='ps-btn--gray'
          width={110}
        />
        <ButtonHref
          href={ROUTE_PATH.REGISTER}
          title='Đăng kí'
          variant='ps-btn--black'
          width={110}
        />
      </div>
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile">
          <a>Hồ sơ</a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={openModalLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <div className="account-dropdown-trigger">
        <Avatar
          src={profile?.avatar || '/default-avatar.png'}
          icon={!profile?.avatar && <UserOutlined />}
          size={36}
        />
        <span className="account-name">{profile.name}</span>
      </div>
    </Dropdown>
  );
};

export default AccountQuickLinks;
