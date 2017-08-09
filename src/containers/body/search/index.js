import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadRepoSearch } from '../../../actions'

import SearchResult from './SearchResult'
import SearchResultNav from './SearchResultNav'
import SearchHome from './SearchHome'

import style from './index.scss'

export class Search extends Component {
  componentWillMount() {
    this.props.loadRepoSearch(this.props.keyword, true)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.keyword !== this.props.keyword) {
      this.props.loadRepoSearch(nextProps.keyword, true)
    }
  }

  render() {
    const { keyword, repoSearchResults, counts } = this.props
    if(!keyword || !keyword.trim()) {
      return <SearchHome/>
    }

    return (
      <div role="main">
        <SearchResultNav counts={counts}/>
        <SearchResult repoSearchResults={repoSearchResults}/>
      </div>
    )
  }
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  repoSearchResults: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    total_count: PropTypes.number.isRequired
  })
}

const mapStateToProps = (state, ownProps) => {
  const keyword = ownProps.params.keyword

  const {
    //TODO: we need more search conditions in further
    pagination: { repoSearch },
    entities: { repos }
  } = state

  const repoSearchResults = repoSearch.items ? repoSearch.items.map(item => repos[item.full_name]) : []
  return {
    keyword,
    repoSearchResults,
    counts: {
      repositories: repoSearch.totalCount,
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
