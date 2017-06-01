import React from 'react'

import { connect } from 'react-redux'

import Dropdown from './dropdown/Dropdown'
import { dropdownToggle }  from '../../actions'
import tooltipStyle from './Tooltipped.scss'
import style from './dropdown.scss'

const USER_CONFIG = 'User'

export const DropdownLink = ({ item, isDisplay, onClick }) => {
  const { name, tips, content } = item
  return (
    <div className={style['dropdown']}>
      <div className={style['header-nav-link'] + ' '
        + (name === USER_CONFIG ? tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw'])}
        aria-label={tips} onClick={e => { e.preventDefault(); onClick(name) }}>{name}</div>
      <Dropdown items={content} isDisplay={isDisplay}/>
    </div>
  )
}

// no necessary ?
const mapStateToProps = (state) => {
  return {
    isDisplay: state.dropdowns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: name => {
      dispatch(dropdownToggle(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLink)
