import React from 'react'
import { connect } from 'react-redux'

import { toggleDropdown } from '../actions'

import HeaderLink from '../headerLink/HeaderLink'
import DropdownLink from '../dropdownContainer'
import style from './UserLinks.scss'

const UserLinks = ({ links, onClick, isDisplay }) => {
  return (
    <ul id="user-links" className={style['user-nav']}>
      {links.map(link => {
        if(link.dropdown)
          return (<DropdownLink key={link.name} link={link}
            onClick={() => onClick(link.name)} isDisplay={isDisplay}/>)
        return (<HeaderLink key={link.name} link={link}/>)
      })}
    </ul>
  )
}

function getLinks(state, filter) {
  switch(filter) {
    
  }
}

const mapStateToProps = state => {
  return {

    //TODO: how to build links?
    links: ,
    isDisplay: state.dropdownDisplay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => dispatch(toggleDropdown(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinks)
