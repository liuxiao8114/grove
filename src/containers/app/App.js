import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import { resetBodyModal } from '../../actions'
import Header from '../../components/header/Header'
import SignIn from '../../containers/body/signIn'
import style from './App.scss'

export class App extends Component {
  handleSubmit(nextValue) {
    const DEFAULT_QUERY = {
      q: nextValue,
      type: 'repositories'
    }

    browserHistory.push({
      pathname: `/search`,
      query: DEFAULT_QUERY
    })
  }

  /*
  if(!this.props.currentUser.username) {
    return <SignIn/>
  }
  */

  render() {


    const { selectedDropdown = null, inputValue, resetBodyModal } = this.props
    return (
      <div>
        <Header inputValue={inputValue} handleSubmit={this.handleSubmit}/>
        <div>
          <div className={selectedDropdown ? style['modal-active'] : style['modal-backdrop']}
            onClick={resetBodyModal}>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  inputValue: ownProps.location.pathname.substring(1),
  selectedDropdown: state.selectedDropdown
})

export default connect(mapStateToProps, {
  resetBodyModal
})(App)
