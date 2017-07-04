import React from 'react'
import HeaderLink from '../../components/header/HeaderLink'
import style from './NavLinks.scss'

export default function NavLinks(props) {
  function renderItem(i) {
    return (<HeaderLink key={i.name} item={i}/>)
  }

  return (
    <ul className={style['header-nav']} role="navigation">
      {props.links.map(renderItem)}
    </ul>
  )
}
