import React from 'react'
import HeaderLink from '../headerLink/HeaderLink'
import DropdownLink from '../dropdownContainer'
import style from './UserLink.scss'

export default class UserLink extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.renderLink = this.renderLink.bind(this)
    this.renderDropdownLink = this.renderDropdownLink.bind(this)
  }

  renderLink(link) {
    return (<HeaderLink key={link.name} item={link}/>)
  }

  renderDropdownLink(link) {
    return (<DropdownLink key={link.name} item={link}
      handleDropdownClick={this.props.handleDropdownClick} dropdownDisplay={this.props.dropdownDisplay}/>)
  }

  renderItem(item) {
    if(item.dropdown) return this.renderDropdownLink(item)
    return this.renderLink(item)
  }

  render() {
    //TODO: no defination of float-right becarse of using flex
    return (
      <ul id="user-links" className={style['user-nav']}>
        {this.props.links.map(this.renderItem)}
      </ul>
    )
  }
}
