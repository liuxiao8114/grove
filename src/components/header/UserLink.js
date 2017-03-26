import React from 'react'
import { Link } from 'react-router'
import HeaderLink from './HeaderLink'
import Dropdown from './Dropdown'

export default function UserLink(props) {
  function renderItem(i) {
    return (<HeaderLink  />)
  }

  return (
    <ul id="user-links" className="header-nav user-nav float-right">
      {props.links.map(renderItem)}
    </ul>
  )
}
