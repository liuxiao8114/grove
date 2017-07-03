export const RESET_BODY_MODAL = 'RESET_BODY_MODAL'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'
export const REPO_SEARCH = 'REPO_SEARCH'
export const USER_SEARCH = 'USER_SEARCH'
export const CODE_SEARCH = 'CODE_SEARCH'

const resetBodyModal = () => {
  return {
    type: RESET_BODY_MODAL
  }
}

export const hideBodyModal = () => (dispatch, getState) => {
  const selectedDropdown = getState().selectedDropdown
  if(!selectedDropdown) return null
  return dispatch(resetBodyModal(selectedDropdown.id))
}

// async fetch
export const repoSearch = text => (dispatch, getState) => {
  const repos = getState().pagination
  return {
    type: REPO_SEARCH,
    endpoint: `/repository_search`,
    text
  }
}

export const codeSearch = {

}

export const userSearch = {

}

export const selectedDropdown = id => {
  return {
    type: SELECTED_DROPDOWN,
    id
  }
}
