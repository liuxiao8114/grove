import React from 'react'
import { Link } from 'react-router'

import style from './SearchResultPagination.scss'

const DIVIDE_COUNT = 10
const searchQuery = (keyword, type) => pageNum =>
`/search?q=${keyword}&type=${type}&page=${pageNum}`

function renderItem(page, currentPage, linkUrl) {
  const blocks = []
  let blocksLength = blocks.length

  function renderPages(front, middle, end, divideCount) {
    for(let i = 1; i <= front; i++) {
      blocks.push(<Link to={linkUrl(i)} className={style.pageItem} activeClassName={style.current}>{i}</Link>)
    }

    if(arguments.length === 1) {
      return
    }

    divideCount-- && blocks.push(<span>...</span>)

    if(middle) {
      let middlePageNumIndex = currentPage - 2, index = 5
      while(index > 0) {
        blocks.push(<Link to={linkUrl(middlePageNumIndex)} className={style.pageItem} activeClassName={style.current}>{middlePageNumIndex++}</Link>)
        index--
      }
    }

    divideCount && blocks.push(<span>...</span>)
    for(let i = end; i <= page; i++) {
      blocks.push(<Link to={linkUrl(i)} className={style.pageItem} activeClassName={style.current}>{i}</Link>)
    }
  }

  if(currentPage === 1) {
    blocks.push(<span className={style.disabled}>Previous</span>)
  } else {
    blocks.push(<Link to={linkUrl(currentPage - 1)} className={style.pageItem} activeClassName={style.current}>Previous</Link>)
  }

  switch (true) {
    case (page <= DIVIDE_COUNT):
      renderPages(page)
      break;
    case (currentPage < 4):
      renderPages(5, false, page - 1, 1)
      break;
    case (currentPage >= 4 && currentPage < 7):
      renderPages(currentPage + 2, false, page - 1, 1)
      break;
    case (currentPage >= 7 && currentPage < page - 5):
      renderPages(2, true, page - 1, 2)
      break;
    case (currentPage >= page - 5):
      renderPages(2, false, currentPage - 2, 1)
      break;
    default:
      blocks.push(<Link to="#">you should never see this!</Link>)
      return blocks
  }

  if(currentPage === blocksLength) {
    blocks.push(<span className={style.disabled}>Next</span>)
  } else {
    blocks.push(<Link to={linkUrl(currentPage + 1)} className={style.pageItem} activeClassName={style.current}>Next</Link>)
  }
  return blocks
}

const SearchResultPagination = ({ keyword, totalPage, currentPage = 1, type }) => {
  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        {renderItem(totalPage, currentPage, searchQuery(keyword, type))}
        <p>This part is in coding!</p>
      </div>
    </div>
  )
}

export default SearchResultPagination
