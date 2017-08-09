import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchResultItem from './SearchResultItem'
import SearchResultPagination from './SearchResultPagination'

import style from './SearchResult.scss'

export default class SearchResult extends Component {
  renderItem(items) {
    return items.map(item => <SearchResultItem item={item}/>)
  }

  render() {
    const repoSearchResults = this.props.repoSearchResults
    const { total_count, items } = repoSearchResults
    return (
      <div className={style['container']}>
        <div className={style['column-three-fouths']}>
          <div className={style['repo-header']}>
            <h3>{total_count} repository results</h3>
            <div><button>Best match</button></div>
          </div>
          <ul className={style['repo-list']}>
            {total_count > 0 && items.length > 0 && this.renderItem(items)}
          </ul>
          <SearchResultPagination />
        </div>
        <div className={style['column-one-fouth']}>

        </div>
      </div>
    )
  }
}
