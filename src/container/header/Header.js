import React from 'react'
import Container from './container/Container'
import { navLinks, userDropdown, repoDropdown, userLinks } from '../data-config.js'

import style from './Header.scss'
import HeaderSearch from '../headerSearch/HeaderSearch.js'
import HeaderLinksContainer from '../headerLinksContainer/HeaderLinksContainer.js'

export default function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <HeaderSearch/>
        <HeaderLinksContainer navLinks={navLinks} userLinks={userLinks}
          dropdownDisplay={props.dropdownDisplay} handleDropdownClick={props.handleDropdownClick}/>
      </div>
    </div>
  )
}
