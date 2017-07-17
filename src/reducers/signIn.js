import { SIGN_IN, SIGN_UP } from '../actions'

export const signUp = (state = {
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

export const signIn = (state = {}, action) => {
  if(action.type === SIGN_IN) {
    return {
      username: 'admin',
      password: 1234
    }
  }
  return state
}
