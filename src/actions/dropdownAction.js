export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const TOGGLE_ALL_DROPDOWN = 'TOGGLE_ALL_DROPDOWN'
export const REPO_SEARCH = 'REPO_SEARCH'

export const toggleDropdown = id => {
  return {
    type: TOGGLE_DROPDOWN,
    id
  }
}

export const toggleAllDropdown = status => {
  return {
    type: TOGGLE_ALL_DROPDOWN,
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
