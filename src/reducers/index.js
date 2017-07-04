import { SELECTED_DROPDOWN, RESET_BODY_MODAL } from '../actions'

export const resetBodyModal = (state, action) => {
  if(action.type === RESET_BODY_MODAL) {
    return {
      ...state,
      selectedDropdown: null
    }
  } else {
    return state
  }
}

export const selectDropdown = (state, action) => {
  if(action.type === SELECTED_DROPDOWN) {
    return {
      ...state,
      selectedDropdown: {
        id: action.id
      }
    }
  }
}
