import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './Dropdown.scss'

const DEFAULT_STYLE = style['header-nav-item'] + ' ' + style['dropdown']
const ACTIVE = style['header-nav-item'] + ' ' + style['dropdown'] + ' ' + style['active']

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
    console.log(tooltipStyle.tooltipped)
    console.log('Is display valid $: ' + tooltipStyle['$tooltipped-display'])
    console.log('Is display valid camt: ' + tooltipStyle['tooltippedDisplay'])
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

    const LINK_STYLE_S = style['header-nav-link'] + ' '  + tooltipStyle['tooltipped'] + ' ' + tooltipStyle['tooltipped-s'],
          LINK_STYLE_SW = style['header-nav-link'] + ' '  + tooltipStyle['tooltipped'] + ' ' + tooltipStyle['tooltipped-sw'],
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
