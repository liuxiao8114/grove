import { combineReducers } from 'redux'
import { merge } from 'lodash'

import { routerReducer as routing } from 'react-router-redux'
import {
  SELECTED_DROPDOWN,
  RESET_BODY_MODAL,
  REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE,
  USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE,
  USER_REPOS_REQUEST, USER_REPOS_SUCCESS, USER_REPOS_FAILURE
} from '../actions'

import { signUpUser, currentUser } from './signIn'
import {
  paginateSearch,
  paginateUserRepos,
  USER_SERACH, REPO_SERACH, USER_OWN_REPOS
} from './paginate'

const selectedDropdown = (state = -1, action) => {
  switch(action.type) {
    case SELECTED_DROPDOWN: {
      return action.id
    }
    case RESET_BODY_MODAL: {
      return -1
    }
    default:
      return state
  }
}

const entities = (state = { users: {}, repositories: {} }, action) => {
  if(action.response && action.response.entities)
    return merge({}, state, action.response.entities)
  return state
}

const pagination = combineReducers({
  userSearch: paginateSearch({
    mapActionToKey: USER_SERACH,
    types: [ USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE ],
    queryName: 'keyword'
  }),
  repoSearch: paginateSearch({
    mapActionToKey: REPO_SERACH,
    types: [ REPO_SEARCH_REQUEST, REPO_SEARCH_SUCCESS, REPO_SEARCH_FAILURE ],
    queryName: 'keyword'
  }),
  userOwnRepos: paginateUserRepos({
    mapActionToKey: USER_OWN_REPOS,
    types: [ USER_REPOS_REQUEST, USER_REPOS_SUCCESS, USER_REPOS_FAILURE ],
    queryName: 'user'
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
