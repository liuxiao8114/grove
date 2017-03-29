import React from 'react'
import Link from 'react-router'

import Dropdown from './Dropdown'

export default class DropdownLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(e.value + ' : dropdownLink clicked!')
    return
  }

  render() {
    const { name, link, dropdown } = this.props.item
    /*
        <Link to={link} className="header-nav-link" onClick={this.handleClick}>{name}</Link>
    */
    return (
      <div className="header-nav-item dropdown">
        <Link to={link} className="header-nav-link" onClick={this.handleClick}/>
        <Dropdown items={dropdown}/>
      </div>
    )
  }
}
