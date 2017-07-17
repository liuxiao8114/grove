import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import { signIn, signInError } from '../../actions'
import style from './SignIn.scss'

class SignIn extends Component {
  handleSubmit(e) {
    e.preventDefault()
    if(!this.nameInput.value.trim() || !this.passInput.value.trim()) {
      this.props.dispatch(signInError('no empty!'))
    } else {
      this.props.dispatch(signIn(this.nameInput, this.passInput))
      this.nameINput.value = ''
      this.passInput.value = ''
    }
  }

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <div className="session-authentication">
        <div id="login" className="auth-form px-3">
          <form onsubmit={this.handleSubmit}>
            <div className="auth-form-header">
              <h1>Sign in to Github</h1>
            </div>
            <div className={style['auth-form-body mt3']}>
              <div>need to be toggled(error msg)</div>
              <label for="login_field">Username or email address</label>
              <input type="text"
                className="form-control input-block"
                name="username"
                defaultValue=""
                ref={input => this.nameInput = input}
                onKeyUp={this.handleKeyUp}
              />
              <label for="password" className="label-password">
                Password
                <a href="/password_reset" className="label-link">Forgot password?</a>
              </label>
              <input type="text"
                className="form-control input-block"
                defaultValue=""
                ref={input => this.passInput = input}
                onKeyUp={this.handleKeyUp}
              />
              <input className="btn btn-primary btn-block" type="submit" value="Sign in"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(SignIn)
