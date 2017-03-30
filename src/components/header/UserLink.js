import React from 'react'
import HeaderLink from './HeaderLink'
import DropdownLink from './DropdownLink'

const DEFAULT_STYLE = 'header-nav-item dropdown'
const ACTIVE = 'active'

export default class UserLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownStyle: DEFAULT_STYLE
    }
    this.renderItem = this.renderItem.bind(this)
    this.renderLink = this.renderLink.bind(this)
    this.renderDropdownLink = this.renderDropdownLink.bind(this)
  }

  renderLink(link) {
    return (<HeaderLink key={link.name} item={link}/>)
  }

  renderDropdownLink(link) {
    return (<DropdownLink key={link.name} item={link} cssStyle={this.state.dropdownStyle}/>)
  }

  renderItem(item) {
    if(item.dropdown) return this.renderDropdownLink(item)
    return this.renderLink(item)
  }

  render() {
    return (
      <ul id="user-links" className="header-nav user-nav float-right">
        {this.props.links.map(this.renderItem)}
      </ul>
    )
  }
}
