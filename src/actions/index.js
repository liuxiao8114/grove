export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const TOGGLE_BODY_MODAL = 'TOGGLE_BODY_MODAL'
export const REPO_SEARCH = 'REPO_SEARCH'
export const SELECTED_DROPDOWN = 'SELECTED_DROPDOWN'

export const toggleDropdown = (dropdownId, isDisplay) => {
  return {
    type: TOGGLE_DROPDOWN,
    dropdownId,
    isDisplay: !isDisplay
  }
}

export const toggleBodyModal = (dropdownId, isDisplay = false) => {
  return {
    type: TOGGLE_BODY_MODAL,
    dropdownId,
    isDisplay
  }
}

// async fetch
export const RepoSearch = (dispatch, getState) => text => {
  return {
    type: REPO_SEARCH,
    text
  }
}

export const resetBodyModal = dropdownId => {
  return {

  }
}

export const selectedDropdown = id => {
  return {
    type: SELECTED_DROPDOWN,
    id
  }
}

export const loadNavLinks = ''
export const loadUserLinks = ''
