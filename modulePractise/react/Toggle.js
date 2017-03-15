import React, { ReactDOM } from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(preState => ({
      isToggleOn: !preState.isToggleOn
    }))
  }

  render() {
    <button onClick={this.handleClick}>
      {this.state.isToggleOn? 'ON' : 'OFF'}
    </button>
  }
}

ReactDOM.render(<Toggle/>, document.getElementById('root'))
