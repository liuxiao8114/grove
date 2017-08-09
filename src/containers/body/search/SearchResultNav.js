import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './SearchResultNav.scss'

const SEARCH_RESULT_NAV_LIST = [ 'Repositories', 'Code', 'Commits', 'Issues', 'Wikis', 'Users' ]

export default class SearchResultNav extends Component {
  renderItem(counts) {
    return SEARCH_RESULT_NAV_LIST.map(item => {
      return (
        <Link to="#">
          {item}
          {counts[item.toLowerCase()] &&
            <span className={style['counter']}>
              {counts[item.toLowerCase()]}
            </span>}
        </Link>
      )
    })
  }

  render() {
    const { counts } = this.props
    return (
      <div className={style['border-bottom-mb-4']}>
        <div className={style['container']} role="navigation">
          <div className={style['underline-nav']}>
            {this.renderItem(counts)}
          </div>
          <div><Link to="/">Advanced search</Link></div>
        </div>
      </div>
    )
  }
}
