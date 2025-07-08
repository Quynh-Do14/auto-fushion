import React, { useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { ProfileState } from '@/core/atoms/profile/profileState'

type Props = {
  isLoggedIn: boolean
  openModalLogout: () => void
}
const AccountQuickLinks = (props: Props) => {
  const { isLoggedIn, openModalLogout } = props
  const profile = useRecoilValue(ProfileState).data;
  if (isLoggedIn === true) {
    return (
      <div className='ps-block--user-account'>
        <i className='icon-user'></i>
        {profile?.name}
        <div className='ps-block__content'>
          <ul className='ps-list--arrow'>
            <li className='ps-block__footer'>
              <div onClick={openModalLogout}>
                Đăng xuất
              </div>
            </li>
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
