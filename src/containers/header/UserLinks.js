import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectedDropdown } from '../../actions'

import HeaderLink from '../../components/header/HeaderLink'
import DropdownLink from '../../components/header/DropdownLink'
import style from './UserLinks.scss'

let udropdownID = 0, rDropdownId = 0

const dropdowns =  {
 userDropdown: [
   { id: 'userDropdown_' + udropdownID++, category: 'username', name: 'liuxiao8114' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your profile', url: '/profile' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Your stars', url: '/stars' },
   { id: 'userDropdown_' + udropdownID++, category: 'userItems', name: 'Explore', url: '/explore' },
   { id: 'userDropdown_' + udropdownID++, category: 'systemItems', name: 'Setting', url: '/setting' }
 ],
 repoDropdown: [
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New repository', url: '/new' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'Import repository', url: '/import' },
   { id: 'repoDropdown_' + rDropdownId++, category: 'repository', name: 'New gist', url: '/gist' }
 ]
}

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
              link={dropdowns[link.dropdownId]}
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
