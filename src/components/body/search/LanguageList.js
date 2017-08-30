import React from 'react'

import style from './LanguageList.scss'

const DEFAULT_LIST_ITEMS = {

}

function renderItems(items) {
  const list = []
  items.forEach(item => {
    list.push(<li>{item}</li>)
  })

  return list
}

const LanguageList = ({ items = '' }) => {
  return (
    <div className={style['container']}>
      <div className={style['language-list']}>
        <h2>Languages</h2>
        {items && renderItems(items)}
      </div>
    </div>
  )
}

export default LanguageList
