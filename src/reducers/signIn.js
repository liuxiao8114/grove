import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_UP } from '../actions'

export const signUpUser = (state = {
  users: {
    admin: {
      username: 'admin',
      password: 1234
    }
  }
}, action) => {
  if(action.type === SIGN_UP) {
    return {
      users: {
        ...state.users,
        [action.username]: {
          username: action.username,
          password: action.password,
          publicEmail: action.publicEmail
        }
      }
    }
  }
  return state
}

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }
    case SIGN_IN_SUCCESS: {
      return {
        username: action.username,
        password: action.password,
        isFetching: false,
        error: null
      }
    }
    case SIGN_IN_ERROR: {
      return {
        isFetching: false,
        error: action.msg
      }
    }
    default:
      return state
  }
}

const signInError = (state = null, action) => {
  if(action.type === SIGN_IN_ERROR) {
    return {
      error: action.msg
    }
  }
  return state
}
