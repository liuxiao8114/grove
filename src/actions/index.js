export {
  REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE,
  USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE,
  CODE_SEARCH_REQUEST, CODE_SEARCH_SUCCESS, CODE_SEARCH_FAILURE,
  loadRepoSearch, loadCodeSearch, loadUserSearch
} from './body/search'

export {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR,
  signInError, signInAsync
} from './signIn'

export {
  SIGN_UP
} from './signUp'

export {
  USER_REPOS_REQUEST, USER_REPOS_SUCCESS, USER_REPOS_FAILURE,
  loadUserRepositories, loadAnnounceList
} from './body/entry'

export const RESET_BODY_MODAL = 'RESET_BODY_MODAL'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'

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

/*
export const selectedSettings = name => {
  return {

  }
}
*/
