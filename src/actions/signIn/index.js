export const SIGN_IN = 'SIGN_IN'

export const signIn = nameOrMail => {
  return {
    type: SIGN_IN,
    nameOrMail
  }
}
