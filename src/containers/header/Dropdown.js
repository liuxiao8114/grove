import React from 'react'
import { connect } from 'react-redux'

import DropdownItem from '../../components/header/DropdownItem'
import style from './Dropdown.scss'

const USER_NAME = 'username'

const Dropdown = ({ items, dropdownDisplay = false}) => {
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

  items.forEach(renderItem)

  return (
    <div className={dropdownDisplay ? style['dropdown-sw-active'] : style['dropdown-menu-sw']}>
      {rows}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  dropdownDisplay: state.selectedDropdown && (state.selectedDropdown === ownProps.items[0].id.slice(0, -2))
})

export default connect(mapStateToProps)(Dropdown)
