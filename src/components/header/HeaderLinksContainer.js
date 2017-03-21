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
        <li class="header-nav-item">
          <a class="header-nav-link dropdown active" href="/gist">A</a>
          <div class="dropdown-menu-content js-menu-content">
            <div class="dropdown-menu dropdown-menu-sw">
              <div class="dropdown-header header-nav-current-user">
                Signed in as
                <strong class="css-truncate-target">liuxiao8114</strong>
              </div>
              <div class="dropdown-divider"></div>
              <a href="" class="dropdown-item"></a>
              <a href="" class="dropdown-item"></a>
              <a href="" class="dropdown-item"></a>
              <a href="" class="dropdown-item"></a>
              <a href="" class="dropdown-item"></a>
              <div class="dropdown-divider"></div>
              <a href="" class="dropdown-item"></a>
              <form action=""></form>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
