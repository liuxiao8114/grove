import React from 'react'
import { connect } from 'react-redux'

import HeaderSearch from '../../containers/header/HeaderSearch.js'
import NavLinks from '../../containers/header/NavLinks'
import UserLinks from '../../containers/header/UserLinks'
import style from './Header.scss'

import { headerLinks } from '../../data-config'

export default function Header(props) {
  const { inputValue, handleSubmit } = props
  const { navLinks, userLinks } = headerLinks
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
