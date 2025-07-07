import Link from 'next/link'
import React, { useState } from 'react'
import logo from "@/asset/img/logo.png"
import Image from 'next/image';
import Router from 'next/router';
const HeaderMobile = () => {
  const [keyword, setKeyword] = useState('');
  function handleSubmit(e: any) {
    e.preventDefault();
    if (keyword !== '') {
      Router.push(`/search?keyword=${keyword}`);
    }
  }

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
        <form className='ps-form--search-mobile' action='/' method='get' onSubmit={(e) => handleSubmit(e)}>
          <div className='form-group--nest'>
            <input
              className='form-control'
              type='text'
              placeholder="Tìm kiếm sản phẩm..."
              onChange={(e) => setKeyword(e.target.value)}
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
