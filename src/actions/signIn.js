export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST
  }
}

const shouldSignIn = state => {
  const currentTime = Date.now()
  if(state.currentUser &&
    currentTime - state.currentUser.loginTime < 600000) {
    return false
  }
  return true
}

const signInSuccess = (nameOrMail, password) => {
  const mailExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  let username, publicEmail = null
  if(mailExp.exec(nameOrMail)) {
    username = nameOrMail.substring(0, nameOrMail.indexOf('@'))
    publicEmail = nameOrMail
  } else {
    username = nameOrMail
  }

  return {
    type: SIGN_IN_SUCCESS,
    username,
    password: password,
    publicEmail: publicEmail
  }
}

export const signInError = msg => ({
  type: SIGN_IN_ERROR,
  msg
})

//TODO: try to find out how to got a token from github and use it to login!
export const signInAsync = (nameOrMail, password) => (dispatch, getState) => {
  if(!shouldSignIn(getState())) {
    return
  }
  dispatch(signInRequest())
  try {
    setTimeout(() => {
      dispatch(signInSuccess(nameOrMail, password))
    }, 3000)
  } catch (e) {
    dispatch(signInError(e))
  }
}
