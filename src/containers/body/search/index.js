import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadRepoSearch } from '../../../actions'
import { searchQueryMappingReducer } from '../../../data-config'

import SearchResult from './SearchResult'
import SearchResultNav from './SearchResultNav'
import SearchHome from './SearchHome'

import style from './index.scss'

export class Search extends Component {
  componentWillMount() {
    this.props.loadRepoSearch(this.props.keyword, true)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.keyword !== this.props.keyword || nextProps.currentPage !== this.props.currentPage) {
      this.props.loadRepoSearch(nextProps.keyword, true)
    }
  }

  render() {
    const { keyword, result, counts, currentCount, currentPage, type } = this.props
    if(!keyword || !keyword.trim()) {
      return <SearchHome/>
    }

    return (
      <div role="main">
        <SearchResultNav counts={counts}/>
        <SearchResult keyword={keyword} currentCount={currentCount}
          result={result} type={type} currentPage={currentPage}/>
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
  const { q: keyword, type = 'repositories', page = 1 } = ownProps.location.query

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
    currentPage: page,
    counts: {
      repositories: pagination.repoSearch.totalCount,
      code: 700,
      commits: 800,
      issues: 20,
      users: 0
    }
  }
}

export default connect(mapStateToProps, {
  loadRepoSearch
})(Search)
