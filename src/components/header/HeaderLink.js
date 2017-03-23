import React from 'react'
import { Link } from 'react-router'

import Dropdown from './Dropdown'

export default class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const dropdown = this.props.dropdown
    if(!dropdown) return
    e.preventDefault()
    return <Dropdown />
  }

  render() {
    const { name, link, dropdown } = this.props
    return (
      <div className="header-nav-item">
        <Link to={link} className="header-nav-link" onClick={this.handleClick}>{name}</Link>
        {dropdown}
      </div>
    )
  }
}
