import React from 'react'
import { Link } from 'react-router'
import HeaderLink from './HeaderLink'
import Dropdown from './Dropdown'

export default function UserLink(props) {
  const links = [
    { name: 'Pull request', link: '/pull', dropdown: null},
    { name: 'Issues', link: '/issue', dropdown: null},
    { name: 'Gist', link: '/gist', dropdown: null}
  ]

  function renderItem(i) {
    return (<HeaderLink name={i.name} link={i.link} dropdown={i.dropdown} />)
  }

  return (
    <ul id="user-links" className="header-nav user-nav float-right">
      {props.userLinks.map(renderItem)}
    </ul>
  )
}
