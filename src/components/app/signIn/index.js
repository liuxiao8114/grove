import React, { Component } from 'react'
import { Link } from 'react-router'
import SignInForm from './SignInForm'

import style from './index.scss'

export default class SignIn extends Component {
  render() {
    return (
      <div className={style["session-authentication"]}>
        <div id="login" className={style["auth-form-px3"]}>
          <SignInForm/>
          <p className={style["create-account-callout-mt3"]}>
            New to Github? {' '}
            <Link to={"#"}>Create an account</Link>
          </p>
        </div>
      </div>
    )
  }
}
