import React from 'react'
import PropTypes from 'prop-types'

import HeaderSearch from './HeaderSearch.js'
import style from './index.scss'

export default function Header(props) {
  const { inputValue, hasSearchBar = true } = props
  return (
    <div className={style.header}>
      { hasSearchBar && <HeaderSearch inputValue={inputValue}/> }
      <div className={style['ul-header-layout']}>
        {props.children}
      </div>
    </div>
  )
}

Header.propTypes = {
  inputValue: PropTypes.string,
  hasSearchBar: PropTypes.bool.isRequired,
  children: PropTypes.array
}
