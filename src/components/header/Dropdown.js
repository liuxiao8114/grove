import React from 'react'

import DropdownItem from './DropdownItem'

const USER_NAME = 'username'
let lastCategory = null, dividerFlag = false, dividerNo = 1

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  handleClick(e) {
    /*
      set active style
    */
    e.preventDefault()
  }

  renderItem(item) {
    if(item.category === USER_NAME) {
      dividerFlag = true
      return (
        <div key="dropdown-header" className="dropdown-header header-nav-current-user">
          Signed in as{' '}
          <strong className="css-truncate-target">{item.name}</strong>
        </div>
      )
    } else if(dividerFlag && (!lastCategory || item.category !== lastCategory)) {
      lastCategory = item.category
      return (
        [
          <div key={dividerNo++} className="dropdown-divider" />,
          <DropdownItem key={item.name} item={item}/>
        ]
      )
    } else {
      return <DropdownItem key={item.name} item={item}/>
    }
  }

  render() {
    return (
      <div className="dropdown-menu-content js-menu-content">
        <div className="dropdown-menu dropdown-menu-sw">
          {this.props.items.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
