import React from 'react'
import { Link } from 'react-router'
import HeaderLink from './HeaderLink'

export default function UserLink(props) {
  function renderItem(i) {
    return (<HeaderLink name={i.name} link={i.link} dropdown={i.dropdown} />)
  }

  return (
    <ul id="user-links" className="header-nav user-nav float-right">
      {props.userLinks.map(renderItem)}
    </ul>
  )
}
