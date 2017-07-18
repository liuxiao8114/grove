export const RESET_BODY_MODAL = 'RESET_BODY_MODAL'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'
export const REPO_SEARCH = 'REPO_SEARCH'
export const USER_SEARCH = 'USER_SEARCH'
export const CODE_SEARCH = 'CODE_SEARCH'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

export const signIn = (nameOrMail = '', password = '') => {
  const mailExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  let username, publicEmail = null
  if(mailExp.exec(nameOrMail)) {
    username = nameOrMail.substring(0, nameOrMail.indexOf('@'))
    publicEmail = nameOrMail
  } else {
    username = nameOrMail
  }
  return {
    type: SIGN_IN,
    username,
    password,
    publicEmail
  }
}

export const signInError = msg => ({
  type: SIGN_IN_ERROR,
  msg
})

//TODO: async auth
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

// TODO: async fetch and use Github API
export const repoSearch = text => (dispatch, getState) => {
  const repos = getState().pagination
  return {
    type: REPO_SEARCH,
    endpoint: `/repository_search`,
    text
  }
}

// TODO: async fetch and use Github API
export const codeSearch = {

}

// TODO: async fetch and use Github API
export const userSearch = {

}

export const selectedSettings = name => {
  return {

  }
}
