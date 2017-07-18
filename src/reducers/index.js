import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECTED_DROPDOWN, RESET_BODY_MODAL } from '../actions'

import { signUpUser, currentUser, signInError } from './signIn'

const selectedDropdown = (state = null, action) => {
  switch(action.type) {
    case SELECTED_DROPDOWN: {
      return action.id
    }
    case RESET_BODY_MODAL: {
      return null
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedDropdown,
  signUpUser,
  currentUser,
  signInError,
  routing
})

export default rootReducer
