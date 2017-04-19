import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './Dropdown'
import classes from './Tooltipped.scss'

const DEFAULT_STYLE = 'header-nav-item dropdown'
const ACTIVE = 'header-nav-item dropdown active'

//let times = 0

export default class DropdownLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: DEFAULT_STYLE,
      linkDisplay: 'hide'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
//    console.log((times++) + ' : ' + this.props.dropdownDisplay)
    this.props.handleDropdownClick(e)
    this.setState({ style : ACTIVE })
    return
  }

  handleMouseOver(e) {
    e.preventDefault()
    //TODO: wait 1s
    this.setState({ linkDisplay : 'show' })
    console.log('check start!')
    console.log(classes.tooltipped)
    console.log('Is display valid : ' + classes['tooltipped-display'])
    /* test import sccs and try to change it

    */
  }

  componentWillReceiveProps() {
//    console.log((times++) + ' update!: ' + this.props.dropdownDisplay)
    if(!this.props.dropdownDisplay && this.state.style === ACTIVE) {
      this.setState({ style : DEFAULT_STYLE })
    }
  }

  render() {
    const { name, link, tips, dropdown } = this.props.item

    const LINK_STYLE_S = 'header-nav-link tooltipped tooltipped-s',
          LINK_STYLE_SW = 'header-nav-link tooltipped tooltipped-sw',
          User_CONFIG = 'User'

    return (
      <div className={this.state.style}>
        <Link to={link} className={name === User_CONFIG ? LINK_STYLE_SW : LINK_STYLE_S + ' ' + this.state.linkDisplay}
          aria-label={tips} onClick={this.handleClick} onMouseOver={this.handleMouseOver}>{name}</Link>
        <Dropdown items={dropdown}/>
      </div>
    )
  }
}
