import React from 'react'
import HeaderLink from '../headerLink/HeaderLink'

export default function NavLink(props) {
  function renderItem(i) {
    return (<HeaderLink key={i.name} item={i}/>)
  }

  return (
    <ul className="header-nav" role="navigation">
      {props.links.map(renderItem)}
    </ul>
  )
}
