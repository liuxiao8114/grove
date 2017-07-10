import React from 'react'
import { connect } from 'react-redux'

import HeaderSearch from '../../containers/header/HeaderSearch.js'
import NavLinks from '../../containers/header/NavLinks'
import UserLinks from '../../containers/header/UserLinks'
import style from './Header.scss'

let navId = 1, userId = 1
const links =  {
  navLinks: [
    { id: 'navLinks_' + navId++, name: 'Pull requests', url: '/pulls', category: 'nav' },
    { id: 'navLinks_' + navId++, name: 'Issues', url: '/issues' },
    { id: 'navLinks_' + navId++, name: 'Gist', url: '/gist' }
  ],
  userLinks: [
    { id: 'userLinks_' + userId++, name: 'Noti', url: '/notifications', tips: 'You have unread notifications', dropdownId: null },
    { id: 'userLinks_' + userId++, name: 'Repo', url: null, tips: 'Create new...', dropdownId: 'repoDropdown' },
    { id: 'userLinks_' + userId++, name: 'User', url: null, tips: 'View profile and more', dropdownId: 'userDropdown' }
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
