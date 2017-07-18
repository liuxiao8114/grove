import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import { signIn, signInError } from '../../../actions'
import style from './SignIn.scss'

export class SignIn extends Component {
  handleSubmit(e) {
    e.preventDefault()

    if(!this.nameInput || !this.passInput) {
      return
    }

    if(!this.nameInput.value.trim() || !this.passInput.value.trim()) {
      this.props.dispatch(signInError('no empty!'))
    } else {
      this.props.dispatch(signIn(this.nameInput, this.passInput))
      this.nameInput.value = ''
      this.passInput.value = ''
    }
  }

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  render() {
    const EN_SPACE = ' '
    return (
      <div className={style["session-authentication"]}>
        <div id="login" className={style["auth-form-px3"]}>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className={style["auth-form-header"]}>
              <h1>Sign in to Github</h1>
            </div>
            <div className={style['auth-form-body']}>
              <div>need to be toggled(error msg)</div>
              <label for="login_field">Username or email address</label>
              <input type="text"
                className={'form-control' + EN_SPACE + style["input-block"]}
                id="login_field"
                name="login"
                tabIndex="1"
                defaultValue=""
                ref={input => this.nameInput = input}
                onKeyUp={this.handleKeyUp.bind(this)} />
              <label for="password" className="label-password">
                Password
                <a href="/password_reset" className="label-link">Forgot password?</a>
              </label>
              <input type="password"
                className={'form-control' + EN_SPACE  + style["input-block"]}
                id="password"
                name="password"
                tabIndex="2"
                defaultValue=""
                ref={input => this.passInput = input}
                onKeyUp={this.handleKeyUp.bind(this)} />
              <input type="submit" className={style["btn btn-primary btn-block"]} value="Sign in" tabIndex="3"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(SignIn)
