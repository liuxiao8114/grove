import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadRepoSearch, loadUserSearch } from '../../../actions'
import { searchQueryMappingReducer } from '../../../data-config'

import SearchResult from '../../../components/body/search/SearchResult'
import SearchResultNav from '../../../components/body/search/SearchResultNav'
import SearchHome from './SearchHome'

import style from './index.scss'

const SERACH_PER_PAGE = {
  repositories: 10,
  code: 10,
  commits: 10,
  issues: 10,
  wikis: 10,
  users: 15
}

function loadData(...searchActions) {
  return (keyword, currentPage, type, params) => {
    for(let action of searchActions) {
      action(keyword, currentPage, SERACH_PER_PAGE[type], type, params)
    }
  }
}

export class Search extends Component {
  componentWillMount() {
    const {
      loadRepoSearch, loadUserSearch,
      keyword, type, currentPage, otherParams = null
    } = this.props

    loadData(
      loadRepoSearch, loadUserSearch
    )(keyword, currentPage, type, otherParams)
  }

  componentWillReceiveProps(nextProps) {
    const {
      loadRepoSearch, loadUserSearch,
      keyword, currentPage, type, otherParams = null
    } = nextProps

    // TODO: reconsider in which conditions won't rerender this
    if(nextProps.keyword !== this.props.keyword
      || nextProps.currentPage !== this.props.currentPage
      || nextProps.type !== this.props.type) {
        loadData(
          loadRepoSearch, loadUserSearch
        )(keyword, currentPage, type, otherParams)
    }
  }

  render() {
    const { keyword, result, counts, currentCount, currentPage, type } = this.props
    if(!keyword || !keyword.trim()) {
      return <SearchHome/>
    }

    return (
      <div role="main">
        <SearchResultNav counts={counts} type={type} keyword={keyword}/>
        <SearchResult keyword={keyword} currentCount={currentCount} result={result}
          type={type} currentPage={currentPage} perPage={SERACH_PER_PAGE[type]}/>
      </div>
    )
  }
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { q: keyword, type = 'repositories', page = 1, ...otherParams } = ownProps.location.query

  const {
    pagination,
    entities: { [type]: entityValue }
  } = state

  const searchValue = pagination[searchQueryMappingReducer[type]],
        result = searchValue.items ? searchValue.items.map(item => entityValue[item]) : [],
        currentCount = searchValue.totalCount

  return {
    keyword,
    type,
    result,
    currentCount,
    otherParams,
    currentPage: parseInt(page, 10),
    counts: {
      repositories: pagination.repoSearch.totalCount || '',
      code: 700,
      commits: 800,
      issues: 20,
      users: pagination.userSearch.totalCount || ''
    }
  }
}

export default connect(mapStateToProps, {
  loadRepoSearch, loadUserSearch
})(Search)
