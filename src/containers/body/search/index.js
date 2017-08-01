import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import SearchResult from './SearchResult'
import SearchResultNav from './SearchResultNav'
import SearchHome from './SearchHome'

import style from './index.scss'

export class Search extends Component {

  render() {
    const { keyword, repoSearchResults, count } = this.props
    if(!keyword || !keyword.trim()) {
      return <SearchHome/>
    }

    return (
      <div>
        <SearchResultNav count={count}/>
        <SearchResult result={repoSearchResults}/>
      </div>
    )
  }
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  repoSearchResults: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }),
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const keyword = ownProps.params.keyword

  const {
    pagination: { repoSearch },
    entities: { repos }
  } = state

  const repoSearchResults = repoSearch.ids.map(id => repos[id])
  return {
    keyword,
    repoSearchResults,
    count: repoSearch.count
  }
}

export default connect({ mapStateToProps })(Search)
