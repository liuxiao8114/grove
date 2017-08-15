import { FETCH_API, Schemas } from '../middlewares/fetchAPI'

export const RESET_BODY_MODAL = 'RESET_BODY_MODAL'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'

export const REPO_SEARCH_REQUEST = 'REPO_SEARCH_REQUEST'
export const REPO_SEARCH_SUCCESS = 'REPO_SEARCH_SUCCESS'
export const REPO_SEARCH_FAILURE = 'REPO_SEARCH_FAILURE'

export const USER_SEARCH_REQUEST = 'USER_SEARCH_REQUEST'
export const USER_SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS'
export const USER_SEARCH_FAILURE = 'USER_SEARCH_FAILURE'

export const CODE_SEARCH_REQUEST = 'CODE_SEARCH_REQUEST'
export const CODE_SEARCH_SUCCESS = 'CODE_SEARCH_SUCCESS'
export const CODE_SEARCH_FAILURE = 'CODE_SEARCH_FAILURE'

export { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR, signInError, signInAsync } from './signIn'

export const selectedDropdown = id => {
  return {
    type: SELECTED_DROPDOWN,
    id
  }
}

export const resetBodyModal = () => {
  return {
    type: RESET_BODY_MODAL
  }
}

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
const fetchUserSearch = () => {

}

//TODO: async auth, this needs server to hold the session
const shouldFetchUser = (name) => (dispatch, getState) => {
  if(getState().entities.users[name]) {
    return null
  } else {
    return dispatch(fetchUserSearch(dispatch))
  }
}

export const loadUserSearch = (keyword, nextPage) => (dispatch, getState) => {

}

export const selectedSettings = name => {
  return {

  }
}
