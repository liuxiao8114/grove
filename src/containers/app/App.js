import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { resetBodyModal } from '../../actions'
import Header from '../../components/header'
import NavLinks from '../../components/header/NavLinks'
import DropdownLinks from '../../containers/header/DropdownLinks'
import SignIn from '../../containers/body/signIn'
import style from './App.scss'
import * as datas from '../../data-config'

// TODO: get datas from server
const { navLinks, headerDropdowns }  = datas

export class App extends Component {
  render() {
    if(!this.props.currentUser.username) {
      return <SignIn/>
    }

    const { selectedDropdown, inputValue, resetBodyModal } = this.props
    return (
      <div>
        <Header inputValue={inputValue}>
          <NavLinks links={navLinks}/>
          <DropdownLinks links={headerDropdowns}/>
        </Header>
        <div className={selectedDropdown ?
          style['modal-active'] : style['modal-backdrop']}
          onClick={resetBodyModal}>
        </div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  selectedDropdown: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  resetBodyModal: PropTypes.func.isRequired,
  children: PropTypes.array,
  currentUser: PropTypes.shape({
    username: PropTypes.string
  })
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  inputValue: ownProps.location.pathname.substring(1),
  selectedDropdown: state.selectedDropdown
})

export default connect(mapStateToProps, { resetBodyModal })(App)
