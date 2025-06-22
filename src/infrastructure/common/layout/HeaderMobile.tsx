import Link from 'next/link'
import React from 'react'
import logo from "@/asset/img/logo.png"
import Image from 'next/image';
const HeaderMobile = () => {
  return (
    <header className='header header--mobile'>
      <div className='navigation--mobile'>
        <div className='navigation__left'>
          <Link href='/'>
            <a className='ps-logo'>
              <Image src={logo} alt="" width={180} height={60} />
            </a>
          </Link>
        </div>
      </div>
      <div className='ps-search--mobile'>
        <form className='ps-form--search-mobile' action='/' method='get'>
          <div className='form-group--nest'>
            <input
              className='form-control'
              type='text'
              placeholder='Search something...'
            />
            <button>
              <i className='icon-magnifier'></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default HeaderMobile
