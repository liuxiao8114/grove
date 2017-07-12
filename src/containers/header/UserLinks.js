import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectedDropdown } from '../../actions'

import HeaderLink from '../../components/header/HeaderLink'
import DropdownLink from '../../components/header/DropdownLink'
import style from './UserLinks.scss'

import { headerDropdowns } from '../../data-config'

//const UserLinks = ({ links, onClick, selectedDropdown = null }) => {
export class UserLinks extends Component {
  render() {
    const { links, onClick } = this.props
    return (
      <ul id="user-links" className={style['user-nav']}>
        {links && links.map(link => {
          if(link.dropdownId) {
            return (<DropdownLink
              key={link.id}
              name= {link.name}
              tips={link.tips}
              link={headerDropdowns[link.dropdownId]}
              onClick={() => onClick(link.dropdownId)}/>)
          }
          return (<HeaderLink key={link.id} item={link}/>)
        })}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(selectedDropdown(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserLinks)
