import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './Dropdown'

const DEFAULT_STYLE = 'header-nav-item dropdown'
const ACTIVE = 'header-nav-item dropdown active'
let times = 0

export default class DropdownLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: DEFAULT_STYLE
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    console.log((times++) + ' : ' + this.props.dropdownDisplay)
    this.props.handleDropdownClick(e)
    this.setState({ style : ACTIVE })
    return
  }

  componentWillReceiveProps() {
    console.log((times++) + ' update!: ' + this.props.dropdownDisplay)
    if(!this.props.dropdownDisplay && this.state.style === ACTIVE) {
      this.setState({ style : DEFAULT_STYLE })
    }
  }

  render() {
    const { name, link, dropdown } = this.props.item

    return (
      <div className={this.state.style}>
        <Link to={link} className="header-nav-link" onClick={this.handleClick}>{name}</Link>
        <Dropdown items={dropdown}/>
      </div>
    )
  }
}
