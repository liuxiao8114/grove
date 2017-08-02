import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './SearchResultNav.scss'

export default class SearchResultNav extends Component {
  renderItem() {

  }

  render() {
    return (
      <div className={style['container']} role="navigation">
        <div className={style['underline-nav']}>
          <div>Search ResultCount: {<em>{this.props.count}</em>}</div>

        </div>
        <div><Link to="/">Advanced search</Link></div>
      </div>
    )
  }
}
