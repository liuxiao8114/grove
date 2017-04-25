import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './dropdown/Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './index.scss'

const USER_CONFIG = 'User'

export default class DropdownLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOver.bind(this)
    this.state = {
      isDropdownDisplay: false,
      tooltipStyle: tooltipStyle['tooltipped-hide']
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
    USER_CONFIG === this.props.name ?
      this.setState({ tooltipStyle: tooltipStyle['tooltipped-sw'] }) :
      this.setState({ tooltipStyle: tooltipStyle['tooltipped-s'] })
//    console.log('check start!')
//    console.log('Is display valid camt: ' + tooltipStyle['tooltippedDisplay'])
    /* test import sccs and try to change it */
  }

  handleMouseOut(e) {
    e.preventDefault()
    console.log('check start!')
    this.setState({ tooltipStyle: tooltipStyle['tooltipped-hide'] })
  }

  componentWillReceiveProps() {
    if(this.state.isDropdownDisplay) {
      this.setState({ isDropdownDisplay: false })
    }
  }

  render() {
    const { name, link, tips, dropdown } = this.props.item
    return (
      <div className={style['dropdown']}>
        <Link to={link} className={style['header-nav-link'] + ' ' + this.state.tooltipStyle}
          aria-label={tips} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{name}</Link>
        <Dropdown items={dropdown} dropdownDisplay={this.state.isDropdownDisplay}/>
      </div>
    )
  }
}
