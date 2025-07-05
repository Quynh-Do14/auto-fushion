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
              <img
                src={logo.src}
                alt="autofusion"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  height: 'auto',
                }}
              />
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
