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

  componentWillReceiveProps() {
    if(this.state.isDropdownDisplay) {
      this.setState({ isDropdownDisplay: false })
    }
  }

  render() {
    const { name, link, tips, dropdown } = this.props.item
    return (
      <div className={style['dropdown']}>
        <Link to={link} className={style['header-nav-link'] + ' '
          + (name === USER_CONFIG ? tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw'])}
          aria-label={tips} onClick={this.handleClick}>{name}</Link>
        <Dropdown items={dropdown} dropdownDisplay={this.state.isDropdownDisplay}/>
      </div>
    )
  }
}
