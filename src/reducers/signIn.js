import { SIGN_IN, SIGN_UP, SIGN_IN_ERROR } from '../actions'

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

export const currentUser = (state = null, action) => {
  if(action.type === SIGN_IN) {
    return {
      username: action.username,
      password: action.password
    }
  }
  return state
}

export const signInError = (state = null, action) => {
  if(action.type === SIGN_IN_ERROR) {
    return {
      error: action.msg
    }
  }
  return state
}
