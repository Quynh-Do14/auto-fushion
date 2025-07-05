import React from 'react'
import AccountQuickLinks from './Acount'
import { isTokenStoraged } from '@/infrastructure/utilities/storage'

const HeaderActions = () => {
  const token = isTokenStoraged()
  // views
  let headerAuthView
  if (token && Boolean(token) === true) {
    headerAuthView = <AccountQuickLinks isLoggedIn={true} />
  } else {
    headerAuthView = <AccountQuickLinks isLoggedIn={false} />
  }
  return <div className='header__actions'>{headerAuthView}</div>
}

export default HeaderActions
