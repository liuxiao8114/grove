import React from 'react'
import Container from './Container'
import './Header.scss'

const navLinks = [
  { name: 'Pull requests', url: '/pulls' },
  { name: 'Issues', url: '/issues' },
  { name: 'Gist', url: '/gist' }
]

const userlinks = {
  links: [
    { name: 'N', url: '/notifications' }
  ],
  userDropdown: [
    { category: 'username', name: 'liuxiao8114' },
    { category: 'userItems', name: 'Your profile', url: '/profile' },
    { category: 'userItems', name: 'Your stars', url: '/stars' },
    { category: 'userItems', name: 'Explore', url: '/explore' },
    { category: 'systemItems', name: 'Setting', url: '/setting' }
  ],
  repoDropdown: [
    { category: 'repository', name: 'New repository', url: '/profile' },
    { category: 'repository', name: 'Import repository', url: '/profile' },
    { category: 'repository', name: 'New gist', url: '/profile' }
  ]
}

export default function Header() {
  return (
    <div className="header">
      <Container navLinks={navLinks} userLinks={userlinks}/>
    </div>
  )
}
