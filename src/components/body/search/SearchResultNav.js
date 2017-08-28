import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './SearchResultNav.scss'

const SEARCH_RESULT_NAV_LIST = [ 'Repositories', 'Code', 'Commits', 'Issues', 'Wikis', 'Users' ]

export default class SearchResultNav extends Component {
  renderItem(counts, keyword, type) {
    return SEARCH_RESULT_NAV_LIST.map(item => {
      return (
        <Link to={{
          pathname: `/search`,
          query: {
            q: keyword,
            type: item.toLowerCase()
          }
        }} className={type === item.toLowerCase() ?
          style['underline-nav-item-select'] :
          style['underline-nav-item']} key={item}>
          {item}
          {counts[item.toLowerCase()] ?
            <span className={style['counter']}>
              {counts[item.toLowerCase()]}
            </span> : ''}
        </Link>
      )
    })
  }

  render() {
    const { counts, keyword, type } = this.props
    return (
      <div className={style['border-bottom-mb-4']}>
        <div className={style['container']} role="navigation">
          <div className={style['underline-nav']}>
            {this.renderItem(counts, keyword, type)}
          </div>
          <div><Link to="/">Advanced search</Link></div>
        </div>
      </div>
    )
  }
}
