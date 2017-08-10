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

// TODO: async fetch and use Github API
export const loadRepoSearch = (keyword, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `search/repositories?q=${keyword}`,
    pageCount = 0
  } = getState().pagination.repoSearch || {}

  if(pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchRepoSearch(keyword, nextPageUrl))
}

// TODO: async fetch and use Github API
export const loadCodeSearch = (keyword, nextPage) => (dispatch, getState) => {

}

// TODO: async fetch and use Github API
export const fetchUserSearch = () => {

}

//TODO: async auth, this needs server to hold the session
export const shouldFetchUser = (nameOrMail) => (dispatch, getState) => {
  if(getState().entities.users[nameOrMail]) {
    return
  } else {
    return
  }
}
