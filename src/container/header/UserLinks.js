import React from 'react'
import { connect } from 'react-redux'

import { toggleDropdown, selectedDropdown } from '../actions'

import HeaderLink from '../headerLink/HeaderLink'
import DropdownLink from '../dropdownContainer'
import style from './UserLinks.scss'

const UserLinks = ({ links, onClick, selectedDropdown = null }) => {
  return (
    <ul id="user-links" className={style['user-nav']}>
      {links.map(link => {
        if(link.dropdown)
          return (<DropdownLink key={link.name} link={link}
            onClick={() => onClick(link.name)} isDisplay={selectedDropdown}/>)
        return (<HeaderLink key={link.name} link={link}/>)
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    links: state.entities.userLinks,
    selectedDropdown: state.selectedDropdown
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {
      dispatch(selectedDropdown(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinks)
