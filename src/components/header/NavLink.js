import React from 'react'
import { Link } from 'react-router'
import HeaderLink from './HeaderLink'

export default function NavLink(props) {
  function renderItem(i) {
    return (<HeaderLink name={i.name} link={i.link} dropdown={i.dropdown} />)
  }

  return (
    <ul className="header-nav" role="navigation">
      {props.headerLinks.map(renderItem)}
    </ul>
  )
}
