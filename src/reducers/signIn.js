import { SIGN_IN } from '../actions'

export const signIn = (state = {}, action) => {
  if(action.type === SIGN_IN) {
    return
  }
  return state
}
