import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import { resetBodyModal } from '../../actions'
import Header from '../../components/header/Header'
import Login from ''
import style from './App.scss'

class SignIn extends Component {
  render() {
    return (
      <div className="session-authentication">
        <div id="login" className="auth-form px-3">
          <form onsubmit={this.props.handleSubmit}>
            <div className="auth-form-header">
              <h1>Sign in to Github</h1>
            </div>
            <div className="auth-form-body mt3">
              <div>need to be toggled(error msg)</div>
              <label for="login_field">Username or email address</label>
              <input type="text" className="form-control input-block" name="username"/>
              <label for="password" className="label-password">
                Password
                <a href="/password_reset" className="label-link">Forgot password?</a>
              </label>
              <input className="form-control input-block" type="text"/>
              <input className="btn btn-primary btn-block" type="submit" value="Sign in"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const handleSubmit = dispatch => event => {

  dispatch()
}

export default connect(null, {
  handleSubmit
})(SignIn)
