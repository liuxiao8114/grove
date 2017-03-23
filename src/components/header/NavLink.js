import React from 'react'
import { Link } from 'react-router'
import HeaderLink from './HeaderLink'

export default function NavLink(props) {
  const links = [
    { name: 'Pull request', link: '/pull', dropdown: null},
    { name: 'Issues', link: '/issue', dropdown: null},
    { name: 'Gist', link: '/gist', dropdown: null}
  ]

  function renderItem(i) {
    return (<HeaderLink name={i.name} link={i.link} dropdown={i.dropdown} />)
  }

  return (
    <ul className="header-nav" role="navigation">
      {links.headerLinks.map(renderItem)}
    </ul>
  )
}
