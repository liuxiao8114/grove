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

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST
  }
}

const signInSuccess = (nameOrMail, password) => {
  const mailExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  let username, publicEmail = null
  if(mailExp.exec(nameOrMail)) {
    username = nameOrMail.substring(0, nameOrMail.indexOf('@'))
    publicEmail = nameOrMail
  } else {
    username = nameOrMail
  }

  return {
    type: SIGN_IN_SUCCESS,
    username,
    password: password,
    publicEmail: publicEmail
  }
}

export const signInError = msg => ({
  type: SIGN_IN_ERROR,
  msg
})

export const signInAsync = (nameOrMail, password) => dispatch => {
  dispatch(signInRequest())
  try {
    setTimeout(() => {
      dispatch(signInSuccess(nameOrMail, password))
    }, 3000)
  } catch (e) {
    dispatch(signInError(e))
  }
}

//TODO: async auth, this needs server to hold the session
export const shouldFetchUser = (nameOrMail) => (dispatch, getState) => {
  if(getState().entities.users[nameOrMail]) {
    return
  } else {
    return
  }
}

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
export const userSearch = {

}

export const selectedSettings = name => {
  return {

  }
}
