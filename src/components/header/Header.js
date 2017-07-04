import React from 'react'
import { connect } from 'react-redux'

import HeaderSearch from '../../container/header/HeaderSearch.js'
import NavLinks from '../../container/header/NavLinks'
import UserLinks from '../../container/header/UserLinks'
import style from './Header.scss'

let navId = 1, userId = 1
const links =  {
  navLinks: {
    '1': { id: navId++, name: 'Pull requests', url: '/pulls', category: 'nav' },
    '2': { id: navId++, name: 'Issues', url: '/issues' },
    '3': { id: navId++, name: 'Gist', url: '/gist' }
  },
  userLinks: [
    { id: userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null },
    { id: userId++, name: 'Repo', url: null, tips: 'Create new...', dropdownId: 'repoDropdown' },
    { id: userId++, name: 'User', url: null, tips: 'View profile and more', dropdownId: 'userDropdown' }
  ]
}

export default function Header(props) {
  const { inputValue, handleSubmit } = props
  const { navLinks, userLinks } = links
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
