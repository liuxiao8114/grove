import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadRepoSearch, loadUserSearch } from '../../../actions'
import { searchQueryMappingReducer } from '../../../data-config'

import SearchResult from '../../../components/body/search/SearchResult'
import SearchResultNav from '../../../components/body/search/SearchResultNav'
import SearchResultPagination from '../../../components/body/search/SearchResultPagination'
import LanguageList from '../../../components/body/search/LanguageList'
import { SEARCH_RESULT_TYPES } from '../../../components/body/search/utils'
import SearchHome from './SearchHome'

import style from './index.scss'

function loadData(...searchActions) {
  return (keyword, currentPage, type, params) => {
    for(let action of searchActions) {
      action(keyword, currentPage, SEARCH_RESULT_TYPES[type].perPage, type, params)
    }
  }
}

export class Search extends Component {
  constructor(props) {
    super(props)
    const {
      loadRepoSearch, loadUserSearch,
      keyword, currentPage, type, otherParams = null
    } = props

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
    if(!keyword || !keyword.trim())
      return <SearchHome/>
    const { perPage, isDisplayLanguageList } = SEARCH_RESULT_TYPES[type]
    let totalPage = Math.ceil(currentCount / perPage)
    if(totalPage > 100) totalPage = 100

    return (
      <div className={style['container']} role='main'>
        <SearchResultNav counts={counts} type={type} keyword={keyword}/>
        <SearchResult currentCount={currentCount} result={result} type={type}>
          <SearchResultPagination keyword={keyword} type={type} totalPage={totalPage} currentPage={currentPage}/>
        </SearchResult>
        {isDisplayLanguageList && <LanguageList keyword={keyword} type={type}/>}
      </div>
    )
  }
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  counts: PropTypes.number,
  currentCount: PropTypes.number
}

const mapStateToProps = (state, ownProps) => {
  const {
          q: keyword,
          type = 'repositories',
          page = 1,
          ...otherParams
        } = ownProps.location.query
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

export default connect(mapStateToProps, { loadRepoSearch, loadUserSearch })(Search)
