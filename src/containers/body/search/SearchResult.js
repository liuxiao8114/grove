import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchResultItem from './SearchResultItem'

import style from './SearchResult.scss'

export default class SearchResult extends Component {
  renderItem() {

  }

  render() {
    const repoSearchResults = this.props.repoSearchResults
    const { total_count, items } = repoSearchResults
    return (
      <div className={style['container']}>
        <div className={style['column-three-fouths']}>
          <div className={style['header']}>
            <h3>{total_count} repository results</h3>
          </div>
          <ul className={style['']}>
            {this.renderItem(items)}
          </ul>
        </div>
        <div className={style['column-one-fouth']}>

        </div>
        Search Result: {<em>{this.props.result}</em>}
      </div>
    )
  }
}
