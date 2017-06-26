import React from 'react'
import { connect } from 'react-redux'

import style from './Header.scss'
import HeaderSearch from '../headerSearch/HeaderSearch.js'
import NavLinks from '../navLink/NavLinks'
import UserLinks from '../userLink/UserLinks'

export default function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <HeaderSearch/>
        <div className={style['ul-header-layout']}>
          <NavLinks links={props.navLinks}/>
          <UserLinks links={props.userLinks}/>
        </div>
      </div>
    </div>
  )
}
