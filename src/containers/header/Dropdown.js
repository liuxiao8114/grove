import React from 'react'
import { connect } from 'react-redux'

import DropdownItem from '../../components/header/DropdownItem'
import { resetBodyModal } from '../../actions'
import style from './Dropdown.scss'

const USER_NAME = 'username'

const Dropdown = ({ items, currentUsername, dropdownDisplay = false }) => {
  let rows = []
  let currentCategory = null, dividerNo = 1
  const renderItem = item => {
    if(item.category === USER_NAME) {
      currentCategory = item.category
      rows.push(
        <div key="dropdown-header" className={style['dropdown-header']}>
          Signed in as{' '}
          <strong className={style['css-truncate-target']}>{currentUsername}</strong>
        </div>
      )
    } else {
      if(item.category !== currentCategory) {
        currentCategory = item.category
        rows.push(<div key={dividerNo++} className={style['dropdown-divider']} />)
      }
      rows.push(<DropdownItem key={item.name} item={item} /*2017/12/12 无用代码? onClick={resetBodyModal}*/ />)
    }
  }

  items.forEach(renderItem)

  return (
    <div className={dropdownDisplay ? style['dropdown-sw-active'] : style['dropdown-menu-sw']}>
      {rows}
    </div>
  )
}

// WTF写法
// ownProps.items[0].id.slice(0, -2)这一坨参考data-config.js
const dropdownName = ownProps => ownProps.items[0].id.slice(0, -2)

const mapStateToProps = (state, ownProps) => ({
  dropdownDisplay: state.selectedDropdown === dropdownName(ownProps),
  currentUsername: state.currentUser.username
})

export default connect(mapStateToProps, { resetBodyModal })(Dropdown)
