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
    loadRepoSearch(this.props.keyword, true)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.keyword !== this.props.keyword) {
      loadRepoSearch(nextProps.keyword, true)
    }
  }

  render() {
    const { keyword, repoSearchResults } = this.props
    if(!keyword || !keyword.trim()) {
      return <SearchHome/>
    }

    return (
      <div>
        <SearchResultNav count={repoSearchResults.total_count}/>
        <SearchResult result={repoSearchResults}/>
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

  const repoSearchResults = repoSearch.items ? repoSearch.ids.map(id => repos[id]) : []
  return {
    keyword,
    repoSearchResults,
    count: repoSearch.count
  }
}

export default connect(mapStateToProps, {
  loadRepoSearch
})(Search)
