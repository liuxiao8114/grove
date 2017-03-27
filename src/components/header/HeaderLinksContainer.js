import React from 'react'

import NavLink from './NavLink'
import UserLink from './UserLink'

export default function HeaderLinksContainer(props) {
  return (
    <div className="ul-header-layout">
      <NavLink links={props.navLinks}/>
      <UserLink links={props.userLinks}/>
    </div>
  )
}
