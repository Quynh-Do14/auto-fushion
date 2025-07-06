import React from 'react'
import AccountQuickLinks from './Acount'
import { isTokenStoraged } from '@/infrastructure/utilities/storage'

const HeaderActions = () => {
  const token = isTokenStoraged()
  // views

  return <div className='header__actions'></div>
}

export default HeaderActions
