import React from 'react'

import NavLink from '../navLink/NavLink'
import UserLink from '../userLink/UserLink'
import style from './HeaderLinksContainer.scss'

export default function HeaderLinksContainer(props) {
  return (
    <div className={style['ul-header-layout']}>
      <NavLink links={props.navLinks}/>
      <UserLink links={props.userLinks}
        dropdownDisplay={props.dropdownDisplay} handleDropdownClick={props.handleDropdownClick}/>
    </div>
  )
}
