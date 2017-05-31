export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const TOGGLE_ALL_DROPDOWN = 'TOGGLE_ALL_DROPDOWN'

export const toggleDropdown = id => {
  return {
    type: TOGGLE_DROPDOWN,
    id
  }
}

export const toggleAllDropdown = () => {
  return {
    type: TOGGLE_ALL_DROPDOWN
  }
}

// async fetch
export const RepoSearch = keyword => {
  return {

  }
}
