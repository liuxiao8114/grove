import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchResultSortList from './SearchResultSortList'
import { SEARCH_RESULT_TYPES } from './utils'

import style from './SearchResult.scss'

export default class SearchResult extends Component {
  renderItem(result, type) {
    const ItemComponent = type && SEARCH_RESULT_TYPES[type].component
    if(!ItemComponent) {
      return null
    }
    return result.map(item => <ItemComponent item={item} key={item.id}/>)
  }

  render() {
    const { currentCount, type, result } = this.props
    return (
      <div className={style['main-content']}>
        <div className={style['result-header']}>
          <h3>{`${currentCount} ${type} results`}</h3>
          <div>
            <button className={style['result-sort-btn']}>
              <span>Sort:</span> {'Best match'}
            </button>
            <ul className={style['result-sort-list']}>
              <SearchResultSortList/>
            </ul>
          </div>
        </div>
        <ul className={style['result-list']}>
          {this.renderItem(result, type)}
        </ul>
        { this.props.children }
      </div>
    )
  }
}

SearchResult.propTypes = {
  currentCount: PropTypes.number,
  type: PropTypes.string,
  result: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.array
}
