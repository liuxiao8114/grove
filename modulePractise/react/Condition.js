import React, { ReactDOM } from 'react'

function UserGreeting(props) {
  return (
    <h4>Welcome back!</h4>
  )
}

function GuestGreeting(props) {
  return (
    <h4>Please sign up!</h4>
  )
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn) return <UserGreeting/>
  return <GuestGreeting/>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isToggleOn: false }
  }

  handleLoginClick() {
    this.setState({ isToggleOn: true })
  }

  handleLogoutClick() {
    this.setState({ isToggleOn: false })
  }

  render() {
    const isLoggedIn = this.state.isToggleOn
    let button = null
    if(isLoggedIn) {
      button = <LogoutButton onclick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onclick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

ReactDOM.render(<LoginControl/>, document.getElementById('root'))

function WarningBanner(props) {
  if(props.showWarning) return (<h4>Warning!</h4>)
  return null
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(preState => ({ showWarning: !preState.showWarning }))
  }

  render() {
    <div>
      <WarningBanner showWarning={this.state.showWarning} />
      <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  }
}
