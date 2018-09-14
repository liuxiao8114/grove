import React from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import HeaderSearch from '../../containers/header/HeaderSearch.js'
import NavLinks from '../../containers/header/NavLinks'
import UserLinks from '../../containers/header/UserLinks'
import style from './Header.scss'

import { headerLinks } from '../../data-config'

function defaultHandleSubmit(nextValue) {
  const DEFAULT_QUERY = {
    q: nextValue,
    type: 'repositories'
  }

  browserHistory.push({
    pathname: `/search`,
    query: DEFAULT_QUERY
  })
}

export default function Header(props) {
  const { inputValue, handleSubmit = defaultHandleSubmit, hasSearchBar = true } = props
  const { navLinks, userLinks } = headerLinks
  return (
    <div className={style.header}>
      <div className={style.container}>
        { hasSearchBar && <HeaderSearch inputValue={inputValue} handleSubmit={handleSubmit}/> }
        <div className={style['ul-header-layout']}>
          <NavLinks links={navLinks}/>
          <UserLinks links={userLinks}/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  inputValue: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  hasSearchBar: PropTypes.bool.isRequired
}
