import React, { Component } from 'react'
import { connect } from 'react'

const RESPONSE_SUCCESS = 'RESPONSE_SUCCESS'

function fetchUser(login) {
  return {
    type: RESPONSE_SUCCESS,
    login
  }
}

function loadUser(login = {}, init) {
  return ({ dispatch, getState }) => {
    if(getState()[login]) return null
    return fetchUser(login, dispatch)
  }
}

class UserPage extends Component {
  constructor() {
    super()
  }

  render() {
    return {

    }
  }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, { loadUser })(UserPage)
