import React from 'react'
import HeaderSearch from './HeaderSearch.js'
import HeaderLinksContainer from './HeaderLinksContainer.js'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <HeaderSearch/>
        <HeaderLinksContainer navLinks={this.props.navLinks} userLinks={this.props.userLinks}/>
      </div>
    )
  }
}
