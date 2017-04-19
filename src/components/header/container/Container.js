import React from 'react'
import HeaderSearch from '../headerSearch/HeaderSearch.js'
import HeaderLinksContainer from '../headerLinksContainer/HeaderLinksContainer.js'
import style from './Container.scss'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.container}>
        <HeaderSearch/>
        <HeaderLinksContainer navLinks={this.props.navLinks} userLinks={this.props.userLinks}
          dropdownDisplay={this.props.dropdownDisplay} handleDropdownClick={this.props.handleDropdownClick}/>
      </div>
    )
  }
}
