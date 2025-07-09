import React, { useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { ProfileState } from '@/core/atoms/profile/profileState'
import avatar from '@/asset/img/avatar.png'
type Props = {
  isLoggedIn: boolean
  openModalLogout: () => void
}
const AccountQuickLinks = (props: Props) => {
  const { isLoggedIn, openModalLogout } = props
  const profile = useRecoilValue(ProfileState).data;
  if (isLoggedIn === true) {
    return (
      <div className="user-dropdown">
        <div className="user-trigger">
          <img src={avatar.src} alt="avatar" className="user-avatar" />
          <span className="user-name">{profile?.name}</span>
        </div>
        <div className="dropdown-content">
          <ul>
            <li onClick={openModalLogout}>Đăng xuất</li>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className='ps-block--user-header'>
        <div className='ps-block__left'>
          <i className='icon-user'></i>
        </div>
        <div className='ps-block__right'>
          <Link href='/auth/login'>
            <a>Đăng nhập</a>
          </Link>
          <Link href='/auth/register'>
            <a>Đăng kí</a>
          </Link>
        </div>

      </div>
    )
  }
}

export default AccountQuickLinks
