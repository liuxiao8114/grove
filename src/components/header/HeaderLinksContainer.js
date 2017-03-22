import React from 'react'
import HeaderLink from './HeaderLink'

function Header(props) {
  function renderItem(i) {
    return (<HeaderLink name={i.name} link={i.link} dropdown={i.dropdown} />)
  }

  const { headerLinks, userLinks } = this.props

  return (
    <div className="ul-header-layout">
      <ul className="header-nav" role="navigation">
        {headerLinks.map(renderItem)}
      </ul>
      <ul id="user-links" className="header-nav user-nav float-right">
        {userLinks.map(renderItem)}
      </ul>
    </div>
  )
}
