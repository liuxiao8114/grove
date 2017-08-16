import { combineReducers } from 'redux'
import { merge } from 'lodash'

import { routerReducer as routing } from 'react-router-redux'
import { SELECTED_DROPDOWN,
         RESET_BODY_MODAL,
         REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE,
         USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE
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

const entities = (state = { users: {}, repositories: {} }, action) => {
  if(action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

const pagination = combineReducers({
  repoSearch: paginate({
    mapActionToKey: 'repoSearch',
    types: [ REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE ]
  }),
  userSearch: paginate({
    mapActionToKey: 'userSearch',
    types: [ USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE ]
  })
})

const rootReducer = combineReducers({
  selectedDropdown,
  signUpUser,
  currentUser,
  entities,
  pagination,
  routing
})

export default rootReducer
