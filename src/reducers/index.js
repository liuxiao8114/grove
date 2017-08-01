import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECTED_DROPDOWN,
         RESET_BODY_MODAL,
         REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE
       } from '../actions'

import { signUpUser, currentUser } from './signIn'
import paginate from './paginate'

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

const pagination = combineReducers({
  repoSearch: paginate({
    mapActionToKey: action => action.full_name,
    types: [ REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE ]
  })
})

const rootReducer = combineReducers({
  selectedDropdown,
  signUpUser,
  currentUser,
  pagination,
  routing
})

export default rootReducer
