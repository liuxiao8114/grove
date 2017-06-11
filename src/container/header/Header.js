import React from 'react'
import { connect } from 'react-redux'

import style from './Header.scss'
import HeaderSearch from '../headerSearch/HeaderSearch.js'
import NavLink from '../navLink/NavLink'
import UserLink from '../userLink/UserLink'

function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <HeaderSearch/>
        <div className={style['ul-header-layout']}>
          <NavLink links={props.navLinks}/>
          <UserLink links={props.userLinks}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    navLinks: state.navLinks,
    userLinks: state.userLinks
  }
}

export default connect({ mapStateToProps })(Header)
