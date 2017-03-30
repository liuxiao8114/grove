import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './Dropdown'

const DEFAULT_STYLE = 'header-nav-item dropdown'
const ACTIVE = 'active'

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
    this.setState({ style : this.state.style.lastIndexOf(ACTIVE) === -1 ? (DEFAULT_STYLE + ' ' + ACTIVE) : DEFAULT_STYLE})
    return
  }

  render() {
    const { name, link, dropdown } = this.props.item
    /*
      1.监听hover事件，定义回调
      2.mouseover和mouseout
    */
    return (
      <div className={this.state.style}>
        <Link to={link} className="header-nav-link" onClick={this.handleClick}>{name}</Link>
        <Dropdown items={dropdown}/>
      </div>
    )
  }
}
