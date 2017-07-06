import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECTED_DROPDOWN, RESET_BODY_MODAL } from '../actions'

const resetBodyModal = (state = {}, action) => {
  if(action.type === RESET_BODY_MODAL) {
    return {
      ...state,
      selectedDropdown: null
    }
  } else {
    return state
  }
}

const selectDropdown = (state = {}, action) => {
  if(action.type === SELECTED_DROPDOWN) {
    return {
      ...state,
      selectedDropdown: {
        id: action.id
      }
    }
  } else {
    return state
  }
}

const rootReducer = combineReducers({
  resetBodyModal,
  selectDropdown,
  routing
})

export default rootReducer
