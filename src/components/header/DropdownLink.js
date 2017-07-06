import React from 'react'

import Dropdown from './Dropdown'
import tooltipStyle from './Tooltipped.scss'
import style from './DropdownLink.scss'

const USER_CONFIG = 'User'

const DropdownLink = ({ item, onClick, isDisplay }) => {
  const { name, tips, content } = item

  return (
    <div className={style['dropdown']}>
      <div className={style['header-nav-link'] + ' '
        + (name === USER_CONFIG ? tooltipStyle['tooltipped-s'] : tooltipStyle['tooltipped-sw'])}
        aria-label={tips} onClick={onClick}>
        {name}
      </div>
      <Dropdown items={content} isDisplay={isDisplay}/>
    </div>
  )
}

export default DropdownLink
