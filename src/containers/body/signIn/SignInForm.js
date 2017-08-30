import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

import { signInAsync, signInError } from '../../../actions'
import style from './SignInForm.scss'

export class SignInForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
    let username = this.nameInput.value,
        password = this.passInput.value

    if(!username.trim() || !password.trim()) {
      this.props.dispatch(
        signInError(`cannot be empty! please check your username: ${username.trim()} & password: ${password.trim()}`))
    } else {
      this.props.dispatch(signInAsync(username, password))
      username = ''
      password = ''
    }
  }

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  render() {
    const EN_SPACE = ' '
    const { isFetching, error = null } = this.props
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className={style['auth-form-header']}>
          <h1 className={style['login-title']}>Sign in to Github</h1>
        </div>
        <div className={style['auth-form-body']}>
          {error && <div className={style['error-msg']}>{error}</div>} 
          <label className={style['label-default']} for="login_field">Username or email address</label>
          <input type="text"
            className={'form-control' + EN_SPACE + style['input-block']}
            id="login_field"
            name="login"
            tabIndex="1"
            defaultValue=""
            ref={input => this.nameInput = input}
            onKeyUp={this.handleKeyUp.bind(this)} />
          <label for="password" className={style['label-password']}>
            Password
            <Link to="/password_reset" className={style['label-link']}>Forgot password?</Link>
          </label>
          <input type="password"
            className={'form-control' + EN_SPACE  + style['input-block']}
            id="password"
            name="password"
            tabIndex="2"
            defaultValue=""
            ref={input => this.passInput = input}
            onKeyUp={this.handleKeyUp.bind(this)} />
            <input type="submit" className={style['btn']}
              value={isFetching ? 'SignIning...' : 'Sign in'}
              disabled={isFetching}
              tabIndex="3"/>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.currentUser.isFetching,
  error: state.currentUser.error
})

export default connect(mapStateToProps)(SignInForm)
