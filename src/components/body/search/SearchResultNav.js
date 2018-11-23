import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import style from './SearchResultNav.scss'

const SEARCH_RESULT_NAV_LIST = [
  'Repositories', 'Code', 'Commits', 'Issues', 'Wikis', 'Users'
]

export default class SearchResultNav extends Component {
  renderItem(counts, keyword, type) {
    return SEARCH_RESULT_NAV_LIST.map(
      item => {
        item = item.toLowerCase()
        return (
          <Link
            to={{ pathname: `/search`,
                  query: { q: keyword, type: item } }}
            className={ type === item ? style['underline-nav-item-select'] : style['underline-nav-item']}
            key={item}>
            {item}
            {counts[item] && <span className={style['counter']}>{counts[item]}</span>}
          </Link>
        )
      }
    )
  }

  render() {
    const { counts, keyword, type } = this.props
    return (
      <div className={style['border-bottom-mb-4']}>
        <div className={style['container']} role="navigation">
          <div className={style['underline-nav']}>
            { this.renderItem(counts, keyword, type) }
          </div>
          <Link to="/">Advanced search</Link>
        </div>
      </div>
    )
  }
}

SearchResultNav.propTypes = {
  counts: PropTypes.number.isRequired,
  keyword: PropTypes.string,
  type: PropTypes.string
}
