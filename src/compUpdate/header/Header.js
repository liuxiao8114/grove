import React from 'react'
import { connect } from 'react-redux'

import HeaderSearch from '../headerSearch/HeaderSearch.js'
import NavLinks from '../navLink/NavLinks'
import UserLinks from '../userLink/UserLinks'
import style from './Header.scss'

export default function Header(props) {
  const { inputValue, navLinks, userLinks, handleSubmit } = props
  return (
    <div className={style.header}>
      <div className={style.container}>
        <HeaderSearch inputValue={inputValue} handleSubmit={handleSubmit}/>
        <div className={style['ul-header-layout']}>
          <NavLinks links={navLinks}/>
          <UserLinks links={userLinks}/>
        </div>
      </div>
    </div>
  )
}
