import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectedDropdown } from '../../actions'

import HeaderLink from '../../components/header/HeaderLink'
import DropdownLink from '../../components/header/DropdownLink'
import style from './UserLinks.scss'

const dropdowns =  {
 userDropdown: [
   { id: '', category: 'username', name: 'liuxiao8114' },
   { id: '', category: 'userItems', name: 'Your profile', url: '/profile' },
   { id: '', category: 'userItems', name: 'Your stars', url: '/stars' },
   { id: '', category: 'userItems', name: 'Explore', url: '/explore' },
   { id: '', category: 'systemItems', name: 'Setting', url: '/setting' }
 ],
 repoDropdown: [
   { id: '', category: 'repository', name: 'New repository', url: '/new' },
   { id: '', category: 'repository', name: 'Import repository', url: '/import' },
   { id: '', category: 'repository', name: 'New gist', url: '/gist' }
 ]
}

//const UserLinks = ({ links, onClick, selectedDropdown = null }) => {
export class UserLinks extends Component {
  render() {
    const { links, onClick, selectedDropdown = null } = this.props
    return (
      <ul id="user-links" className={style['user-nav']}>
        {links && links.map(link => {
          if(link.dropdownId) {
            console.log('drodown id: ' + link.dropdownId)
              return (<DropdownLink key={link.id} link={dropdowns[link.dropdownId]}
                onClick={() => onClick(link.dropdownId)}
                isDisplay={selectedDropdown && selectedDropdown.id === link.dropdownId}/>)
          }
          return (<HeaderLink key={link.id} link={link}/>)
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    links: ownProps.links,
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
