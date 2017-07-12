export const RESET_BODY_MODAL = 'RESET_BODY_MODAL'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'
export const REPO_SEARCH = 'REPO_SEARCH'
export const USER_SEARCH = 'USER_SEARCH'
export const CODE_SEARCH = 'CODE_SEARCH'

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
