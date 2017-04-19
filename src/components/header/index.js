import React from 'react'
import Container from './container/Container'
import style from './Header.scss'

const navLinks = [
  { name: 'Pull requests', url: '/pulls' },
  { name: 'Issues', url: '/issues' },
  { name: 'Gist', url: '/gist' }
]

const userDropdown = [
  { category: 'username', name: 'liuxiao8114' },
  { category: 'userItems', name: 'Your profile', url: '/profile' },
  { category: 'userItems', name: 'Your stars', url: '/stars' },
  { category: 'userItems', name: 'Explore', url: '/explore' },
  { category: 'systemItems', name: 'Setting', url: '/setting' }
]

const repoDropdown = [
  { category: 'repository', name: 'New repository', url: '/new' },
  { category: 'repository', name: 'Import repository', url: '/import' },
  { category: 'repository', name: 'New gist', url: '/gist' }
]

const userlinks = [
  { name: 'Noti', url: '/notifications', tips:'You have unread notifications', dropdown: null },
  { name: 'Repo', url: null, tips:'Create new...', dropdown: repoDropdown },
  { name: 'User', url: null, tips:'View profile and more', dropdown: userDropdown }
]

export default function Header(props) {
  return (
    <div className={style.header}>
      <Container navLinks={navLinks} userLinks={userlinks}
        dropdownDisplay={props.dropdownDisplay} handleDropdownClick={props.handleDropdownClick}/>
    </div>
  )
}
