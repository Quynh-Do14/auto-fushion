import React from 'react'
import Link from 'next/link'
type Props = {
  isLoggedIn: boolean
}
const AccountQuickLinks = (props: Props) => {
  const { isLoggedIn } = props
  const handleLogout = () => {
  }


  if (isLoggedIn === true) {
    return (
      <div className='ps-block--user-account'>
        <i className='icon-user'></i>
        <div className='ps-block__content'>
          <ul className='ps-list--arrow'>
            <li className='ps-block__footer'>
              <a href='#' onClick={handleLogout}>
                Logout
              </a>
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
