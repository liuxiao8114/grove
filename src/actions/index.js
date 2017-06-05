export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const TOGGLE_BODY_MODAL = 'TOGGLE_BODY_MODAL'
export const REPO_SEARCH = 'REPO_SEARCH'

export const toggleDropdown = id => {
  return {
    type: TOGGLE_DROPDOWN,
    id
  }
}

export const toggleBodyModal = status => {
  return {
    type: TOGGLE_BODY_MODAL,
    status
  }
}

// async fetch
export const RepoSearch = keyword => {
  return {
    type: REPO_SEARCH,
    keyword
  }
}

export const loadNavLinks = '';
export const loadUserLinks = '';
