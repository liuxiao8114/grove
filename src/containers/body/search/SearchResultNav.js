import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './SearchResultNav.scss'

const SEARCH_RESULT_NAV_LIST = [ 'Repositories', 'Code', 'Commits', 'Issues', 'Wikis', 'Users' ]

export default class SearchResultNav extends Component {
  renderItem() {
    return SEARCH_RESULT_NAV_LIST.map((item, index) => {
      return (
        <Link to="#">
          {item}
           <span className={style['counter-ml-2']}>
             {this.props.count || 100}
           </span>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className={style['border-bottom-mb-4']}>
        <div className={style['container']} role="navigation">
          <div className={style['underline-nav']}>
            {this.renderItem()}
          </div>
          <div><Link to="/">Advanced search</Link></div>
        </div>
      </div>
    )
  }
}
