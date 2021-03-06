import React from 'react'

import DropdownItem from '../dropdownItem/DropdownItem'
import style from './Dropdown.scss'

const USER_NAME = 'username'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    /*
      set active style
    */
    e.preventDefault()
  }

  render() {
    let rows = []
    let lastCategory = null, dividerNo = 1
    const renderItem = item => {
      if(item.category === USER_NAME) {
        lastCategory = item.category
        rows.push(
          <div key="dropdown-header" className={style['dropdown-header']}>
            Signed in as{' '}
            <strong className={style['css-truncate-target']}>{item.name}</strong>
          </div>
        )
      } else if(!lastCategory) {
        lastCategory = item.category
        rows.push(<DropdownItem key={item.name} item={item}/>)
      } else if(lastCategory && item.category !== lastCategory) {
        lastCategory = item.category
        rows.push(<div key={dividerNo++} className={style['dropdown-divider']} />)
        rows.push(<DropdownItem key={item.name} item={item}/>)
      } else {
        rows.push(<DropdownItem key={item.name} item={item}/>)
      }
    }

    this.props.items.forEach(renderItem)
    return (
      <div className={this.props.dropdownDisplay ? style['dropdown-sw-active'] : style['dropdown-menu-sw']}>
        {rows}
      </div>
    )
  }
}
