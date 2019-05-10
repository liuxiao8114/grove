import React from 'react'
import { Link } from 'react-router'

import style from './LanguageList.scss'

const DEFAULT_LIST_ITEMS = [ 'JavaScript', 'Java', 'CSS', 'Ruby', 'HTML', 'PHP' ]

const searchQuery = (keyword, type) => language => ({
  pathname: `search`,
  query: {
    q: keyword,
    type: type,
    l: language
  }
})

function renderItems(items, query) {
  const list = []
  items.forEach(item => {
    list.push(
      <li key={item} className={style.item}>
        <Link to={query(item.toLowerCase())}>
          <span>{item}</span><span>10,000</span>
        </Link>
      </li>
    )
  })
  return list
}

const LanguageList = ({ items = DEFAULT_LIST_ITEMS, keyword, type = 'repositories' }) => {
  return (
    <div className={style['container']}>
      <div className={style['language-list']}>
        <h2>Languages</h2>
        {items && renderItems(items, searchQuery(keyword, type))}
      </div>
    </div>
  )
}

export default LanguageList
