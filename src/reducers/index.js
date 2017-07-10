import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECTED_DROPDOWN, RESET_BODY_MODAL } from '../actions'

const resetBodyModal = (state = null, action) => {
  if(action.type === RESET_BODY_MODAL) {
    return {
      ...state,
      selectedDropdown: null
    }
  } else {
    return state
  }
}

const selectedDropdown = (state = null, action) => {
  if(action.type === SELECTED_DROPDOWN) {
    return {
      ...state,
      selectedDropdown: action.id
    }
  } else {
    return state
  }
}

const rootReducer = combineReducers({
  resetBodyModal,
  selectedDropdown,
  routing
})

export default rootReducer
