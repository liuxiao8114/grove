import React from 'react'
import { Link }  from 'react-router'

import Dropdown from './dropdown/Dropdown'
import { dropdownToggle }  from '../../actions'
import tooltipStyle from './Tooltipped.scss'
import style from './dropdown.scss'

const USER_CONFIG = 'User'

export const DropdownLink = ({ item, isDisplay }) => {
  const { name, link, tips, dropdown, onDropdownClick } = item
  return (
    <div className={style['dropdown']}>
      <Link to={link} className={style['header-nav-link'] + ' '
        + (name === USER_CONFIG ? tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw'])}
        aria-label={tips} onClick={e => { e.preventDefault(); onDropdownClick(this.props.key) }}>{name}</Link>
      { this.props.isDisplay ? <Dropdown items={dropdown}/> : null }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDisplay: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDropdownClick: id => {
      dispatch(dropdownToggle(id))
    }
  }
}
