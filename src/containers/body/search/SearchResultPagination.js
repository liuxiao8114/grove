import React from 'react'
import { Link } from 'react-router'

import style from './SearchResultPagination.scss'

function renderItem(page, currentPage = 1) {
  const blocks = []
  if(currentPage === 1) {
    blocks.push(<span className={style.disabled}>Previous</span>)
  } else {
    blocks.push(<Link to="#">Previous</Link>)
  }

  for(let i = 0; i <= page; i++) {
    if(i === currentPage) {
      blocks.push(<em className={style.current}>{i}</em>)
    } else {
      blocks.push()
    }
  }
}

const SearchResultPagination = (keyword, page, currentPage = 1, type) => {
  return (
    <div className={style.paginationContainer}>
      <div>

      </div>
      Pagination waiting for edit!
    </div>
  )
}

export default SearchResultPagination
