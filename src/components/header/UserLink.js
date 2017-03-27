import React from 'react'
import HeaderLink from './HeaderLink'
import Dropdown from './Dropdown'

export default class UserLink extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLink(link) {
    return (<HeaderLink key={link.name} item={link}/>)
  }

  renderDropdown(dropdown) {

  }

  render() {
    const { links, repoDropdown, userDropdown } = this.props.links
    return (
      <ul id="user-links" className="header-nav user-nav float-right">
        {links.map(this.renderLink)}
        <Dropdown key="repoDropdown" items={repoDropdown}/>
        <Dropdown key="userDropdown" items={userDropdown}/>
      </ul>
    )
  }
}
