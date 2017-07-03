import React from 'react'
import { connect } from 'react-redux'

import { selectedDropdown } from '../actions'

import HeaderLink from '../headerLink/HeaderLink'
import DropdownLink from '../dropdownContainer'
import style from './UserLinks.scss'

const UserLinks = ({ links, onClick, selectedDropdown = null }) => {
  return (
    <ul id="user-links" className={style['user-nav']}>
      {links.map(link => {
        if(link.dropdownId)
          return (<DropdownLink key={link.name} link={link}
            onClick={() => onClick(link.dropdownId)}
            isDisplay={ selectedDropdown && selectedDropdown.id === link.dropdownId}/>)
        return (<HeaderLink key={link.name} link={link}/>)
      })}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    links: ownProps.userLinks,
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
