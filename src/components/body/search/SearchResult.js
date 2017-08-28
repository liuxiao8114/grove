import React, { Component } from 'react'
import { connect } from 'react-redux'

import RepoItem from './RepoItem'
import UserItem from './UserItem'
import SearchResultPagination from './SearchResultPagination'

import style from './SearchResult.scss'

const resultTypeMappingComponent = {
  repositories: {
    component: RepoItem,
    perPage: 10,
    language: true
  },
  code: 'CodeItem',
  commits: 'CommitItem',
  issues: 'IssueItem',
  wikis: 'WikiItem',
  users: {
    component: UserItem,
    perPage: 10,
    language: false
  }
}

const typesHaveLanguageList = {

}

export default class SearchResult extends Component {
  renderItem(result, type) {
    const ItemComponent = type && resultTypeMappingComponent[type].component

    if(!ItemComponent){
      return null
    }

    return result.map(item => <ItemComponent item={item} key={item.id}/>)
  }

  render() {
    const { keyword, currentCount, type, result, currentPage, perPage } = this.props
    let totalPage = Math.ceil(currentCount / perPage)
    if(totalPage > 100)  totalPage = 100

    return (
      <div className={style['container']}>
        <div className={style['main-content']}>
          <div className={style['result-header']}>
            <h3>{currentCount + ' ' + type + ' '} results</h3>
            <div><button>Best match</button></div>
          </div>
          <ul className={style['result-list']}>
            {this.renderItem(result, type)}
          </ul>
          <SearchResultPagination keyword={keyword} type={type}
            totalPage={totalPage} currentPage={currentPage}/>
        </div>
        {resultTypeMappingComponent[type].language ?
          <div className={style['lang-list']}>
            list language
          </div> : 'no language!'
        }
      </div>
    )
  }
}
/*
{(currentCount > 0 && result.length > 0) ? this.renderItem(result) :

}

*/
