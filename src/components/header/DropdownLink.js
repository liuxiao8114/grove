import React from 'react'

import Dropdown from './Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './DropdownLink.scss'

const USER_CONFIG = 'User'

const DropdownLink = ({ link, name, tips = '', onClick, isDisplay = false }) => {
  return (
    <div className={style['dropdown']}>
      <div className={style['header-nav-link'] + ' '
        + (name === USER_CONFIG ? tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw'])}
        aria-label={tips} onClick={onClick}>
        {name}
      </div>
      <Dropdown items={link} dropdownDisplay={isDisplay}/>
    </div>
  )
}

export default DropdownLink
