import React from 'react'
import HeaderLink from './HeaderLink'

export default function HeaderLinksContainer(props) {
  return (
    <div className="ul-header-layout">
      <ul className="header-nav" role="navigation">
        <li className="header-nav-item"><a className="header-nav-link" href="/pulls">Pull requests</a></li>
        <li className="header-nav-item"><a className="header-nav-link" href="/issues">Issues</a></li>
        <li className="header-nav-item"><a className="header-nav-link" href="/gist">Gist</a></li>
      </ul>
      <ul id="user-links" className="header-nav user-nav float-right">
        <li className="header-nav-item"><a className="header-nav-link" href="/notifications">N</a></li>
        <li className="header-nav-item"><a className="header-nav-link" href="/issues">I</a></li>
        <li className="header-nav-item">
          <a className="header-nav-link dropdown active" href="/gist">A</a>
          <div className="dropdown-menu-content js-menu-content">
            <div className="dropdown-menu dropdown-menu-sw">
              <div className="dropdown-header header-nav-current-user">
                Signed in as
                <strong className="css-truncate-target">liuxiao8114</strong>
              </div>
              <div className="dropdown-divider"></div>
              <a href="/liuxiao8114" className="dropdown-item">Your profile</a>
              <a href="/liuxiao8114?tab=starts" className="dropdown-item">Your stars</a>
              <a href="/explore" className="dropdown-item">Explore</a>
              <a href="/integrations" className="dropdown-item">Integrations</a>
              <a href="" className="dropdown-item">Help</a>
              <div className="dropdown-divider"></div>
              <a href="" className="dropdown-item">Settings</a>
              <form action="">
                <button className="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" type="submit"> Sign out </button>
              </form>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
