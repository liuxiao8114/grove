import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import style from './Dropdown.scss'

const USER_NAME = 'user'

const Dropdown = ({ items, currentUsername, isDisplay }) => {
  let rows = []
  let i = 0

  const renderItem = varyKeyOrObj => {
    if(typeof varyKeyOrObj === 'object') {
      const obj = varyKeyOrObj
      rows.push(
        <Link key={obj.id} to={obj.url} className={style['dropdown-item']}>{obj.name}</Link>
      )
    } else {
      const vary = varyKeyOrObj
      if(vary === USER_NAME) {
        rows.push(
          <div key="dropdown-header" className={style['dropdown-header']}>
            Signed in as{' '}
            <strong className={style['css-truncate-target']}>{currentUsername}</strong>
          </div>
        )
      } else {
        items[vary].forEach(item => {
          rows.push(
            <Link key={item.id} to={item.url} className={style['dropdown-item']}>{item.name}</Link>
          )
        })
      }
      rows.push(<div key={`divider_${i++}`} className={style['dropdown-divider']}/>)
    }
  }

  if(Array.isArray(items)) {
    items.forEach(renderItem)
  } else {
    Object.keys(items).forEach(renderItem)
    rows.pop()
  }

  return (
    <div className={isDisplay ? style['dropdown-sw-active'] : style['dropdown-menu-sw']}>
      {rows}
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  currentUsername: PropTypes.string.isRequired,
  isDisplay: PropTypes.bool.isRequired
}

export default Dropdown
