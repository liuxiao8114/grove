import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './dropdown/Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './index.scss'



export default class DropdownLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.state = {
      isDropdownDisplay: false
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.props.handleDropdownClick(e)
    this.setState({ isDropdownDisplay: true })
    return
  }

  handleMouseOver(e) {
    e.preventDefault()
    //TODO: wait 1s
//    console.log('check start!')
//    console.log('Is display valid camt: ' + tooltipStyle['tooltippedDisplay'])
    /* test import sccs and try to change it */
  }

  componentWillReceiveProps() {
    if(this.state.isDropdownDisplay) {
      this.setState({ isDropdownDisplay: false })
    }
  }

  render() {
    const { name, link, tips, dropdown } = this.props.item

    const LINK_STYLE_S = style['header-nav-link'] + ' '  + tooltipStyle['tooltipped'] + ' ' + tooltipStyle['tooltipped-s'],
          LINK_STYLE_SW = style['header-nav-link'] + ' '  + tooltipStyle['tooltipped'] + ' ' + tooltipStyle['tooltipped-sw'],
          User_CONFIG = 'User'

    return (
      <div className={style['dropdown']}>
        <Link to={link} className={name === User_CONFIG ? LINK_STYLE_SW : LINK_STYLE_S}
          aria-label={tips} onClick={this.handleClick} onMouseOver={this.handleMouseOver}>{name}</Link>
        <Dropdown items={dropdown} dropdownDisplay={this.state.isDropdownDisplay}/>
      </div>
    )
  }
}
