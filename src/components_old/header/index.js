import React from 'react'
import Container from './container/Container'
import style from './Header.scss'

const navLinks = [
  { id: '', name: 'Pull requests', url: '/pulls' },
  { id: '', name: 'Issues', url: '/issues' },
  { id: '', name: 'Gist', url: '/gist' }
]

const userDropdown = [
  { id: '', category: 'username', name: 'liuxiao8114' },
  { id: '', category: 'userItems', name: 'Your profile', url: '/profile' },
  { id: '', category: 'userItems', name: 'Your stars', url: '/stars' },
  { id: '', category: 'userItems', name: 'Explore', url: '/explore' },
  { id: '', category: 'systemItems', name: 'Setting', url: '/setting' }
]

const repoDropdown = [
  { id: '', category: 'repository', name: 'New repository', url: '/new' },
  { id: '', category: 'repository', name: 'Import repository', url: '/import' },
  { id: '', category: 'repository', name: 'New gist', url: '/gist' }
]

const userlinks = [
  { id: '', name: 'Noti', url: '/notifications', tips:'You have unread notifications', content: null },
  { id: '', name: 'Repo', url: null, tips:'Create new...', content: repoDropdown },
  { id: '', name: 'User', url: null, tips:'View profile and more', content: userDropdown }
]

export default function Header(props) {
  return (
    <div className={style.header}>
      <Container navLinks={navLinks} userLinks={userlinks}
        dropdownDisplay={props.dropdownDisplay} handleDropdownClick={props.handleDropdownClick}/>
    </div>
  )
}
