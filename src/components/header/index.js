import React from 'react'
import Container from './Container'
import './Header.scss'

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
  { name: 'N', url: '/notifications', dropdown: null },
  { name: 'R', url: '/notifications', dropdown: repoDropdown },
  { name: 'U', url: '/notifications', dropdown: userDropdown }
]

export default function Header() {
  return (
    <div className="header">
      <Container navLinks={navLinks} userLinks={userlinks}/>
    </div>
  )
}
