import { FETCH_API, Schemas } from '../middlewares/fetchAPI'

export const REPO_SEARCH_REQUEST = 'REPO_SEARCH_REQUEST'
export const REPO_SEARCH_SUCCESS = 'REPO_SEARCH_SUCCESS'
export const REPO_SEARCH_FAILURE = 'REPO_SEARCH_FAILURE'

export const USER_SEARCH_REQUEST = 'USER_SEARCH_REQUEST'
export const USER_SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS'
export const USER_SEARCH_FAILURE = 'USER_SEARCH_FAILURE'

export const CODE_SEARCH_REQUEST = 'CODE_SEARCH_REQUEST'
export const CODE_SEARCH_SUCCESS = 'CODE_SEARCH_SUCCESS'
export const CODE_SEARCH_FAILURE = 'CODE_SEARCH_FAILURE'

const fetchRepoSearch = (keyword, nextPageUrl) => ({
  keyword,
  [FETCH_API]: {
    types: [ REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.REPO_SEARCH_RESULTS
  }
})

export const loadRepoSearch = (keyword, displayPageNum = 1, perPage = 10, nextPage) => (dispatch, getState) => {
  const repoSearch = getState().pagination.repoSearch,
        nextPageUrl = `search/repositories?q=${keyword}&page=${displayPageNum}&per_page=${perPage}`

  //TODO: what's the meaning of this?
  const {
    pageCount = 0
  } = repoSearch.keyword === keyword ? repoSearch : {}

  if(pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchRepoSearch(keyword, nextPageUrl))
}

// TODO: waiting for coding
export const loadCodeSearch = (keyword, nextPage) => (dispatch, getState) => {

}

const fetchUserSearch = (keyword, nextPageUrl) => ({
  keyword,
  [FETCH_API]: {
    types: [ USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.USER_SEARCH_RESULTS
  }
})

//TODO: async auth, this needs server to hold the session
const shouldFetchUser = (nextName, currentUsers) => {
  if(currentUsers.includes(nextName)) {
    return false
  }
  return true
}

export const loadUserSearch = (keyword, displayPageNum, perPage = 10) => (dispatch, getState) => {
  if(shouldFetchUser(keyword, getState().entities.users)) {
    const nextPageUrl = `search/users?q=${keyword}&page=${displayPageNum}&per_page=${perPage}`
    return fetchUserSearch(keyword, nextPageUrl)
  }
}
