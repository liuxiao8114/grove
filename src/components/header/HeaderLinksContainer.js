import React from 'react'
import HeaderLink from './HeaderLink'

import NavLink from './NavLink'
import UserLink from './UserLink'

export default function HeaderLinksContainer(props) {
  return (
    <div className="ul-header-layout">
      <NavLink/>
      <UserLink/>
    </div>
  )
}
