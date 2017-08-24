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

export const loadRepoSearch = (keyword, ...params) => (dispatch, getState) => {
  const { currentPage = 1, perPage = 10, ...otherParams } = params
  const repoSearch = getState().pagination.repoSearch
  let nextPageUrl = `search/repositories?q=${keyword}&page=${currentPage}&per_page=${perPage}`

  if(otherParams) {
    for(let key in otherParams) {
      nextPageUrl += `&${key}=${otherParams[key]}`
    }
  }

  //TODO: what's the meaning of this?
  const {
    pageCount = 0
  } = repoSearch.keyword === keyword ? repoSearch : {}

  if(pageCount > 0) {
    return null
  }

  return dispatch(fetchRepoSearch(keyword, nextPageUrl))
}

// TODO: waiting for coding
export const loadCodeSearch = (keyword) => (dispatch, getState) => {

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
//Maybe this is not needed here
const shouldFetchUser = (nextName, currentUsers) => {
  if(currentUsers.includes(nextName)) {
    return false
  }
  return true
}

export const loadUserSearch = (keyword, ...params) => (dispatch, getState) => {
  const { currentPage = 1, perPage = 10, language } = params
  let nextPageUrl = `search/users?q=${keyword}&page=${currentPage}&per_page=${perPage}`

  if(language) {
    nextPageUrl += `&l=${language}`
  }

  return fetchUserSearch(keyword, nextPageUrl)
}
