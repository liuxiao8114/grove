import { Component } from 'react'
import { connect } from 'react-redux'

const showNotification = (id, text) => {
  return {
    type: 'SHOW_NOTIFICATION',
    id,
    text
  }
}

const hideNotification = id => {
  return {
    type: 'HIDE_NOTIFICATION',
    id
  }
}


class Foo extends Component {

  handleClick() {
    this.props.dispatch(showNotification('log in'))
    setTimeout(() => {
      this.props.dispatch(hideNotification('log in'))
    }, 5000)
  }

  render() {
    const { notifications } = this.props
    return (
      <div>
        <button onClick={this.handleClick}>SHOW</button>
      </div>
    )
  }
}

class Bar extends Component {
  handleClick() {
    this.props.dispatch(showNotification('log in'))
    setTimeout(() => {
      this.props.dispatch(hideNotification('log in'))
    }, 10000)
  }
}

let count = 0

const showNotifiactionCreator = text => dispatch => {
  const id = count++
  dispatch(showNotification(id, text))
  setTimeout(() => {
    dispatch(hideNotification(id))
  }, 5000)
}

class Zol extends Component {
  handleClick() {
    showNotifiactionCreator('log in')(this.props.dispatch)
  }
}

const mapStateToPropsInZol = state => {
  return {
    id: state.id
  }
}

connect(mapStateToPropsInZol, { showNotifiactionCreator })(Zol)

const thunk = (action) => {
  
}

const reducer = (state, action) => {
  switch(action.type) {
    case '': {
      return {
        id: action.id
      }
    }
    default:
      return state
  }
}
