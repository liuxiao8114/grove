import React from 'react'

import DropdownItem from './DropdownItem'
import style from './Dropdown.scss'

const USER_NAME = 'username'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    /*
      set active style
    */
    e.preventDefault()
  }

  render() {
    let rows = []
    let lastCategory = null, dividerNo = 1
    const renderItem = item => {
      if(item.category === USER_NAME) {
        lastCategory = item.category
        rows.push(
          <div key="dropdown-header" className="dropdown-header header-nav-current-user">
            Signed in as{' '}
            <strong className="css-truncate-target">{item.name}</strong>
          </div>
        )
      } else if(!lastCategory) {
        lastCategory = item.category
        rows.push(<DropdownItem key={item.name} item={item}/>)
      } else if(lastCategory && item.category !== lastCategory) {
        lastCategory = item.category
        rows.push(<div key={dividerNo++} className={style['dropdown-divider']} />)
        rows.push(<DropdownItem key={item.name} item={item}/>)
      } else {
        rows.push(<DropdownItem key={item.name} item={item}/>)
      }
    }

    this.props.items.forEach(renderItem)

    return (
      <div className="dropdown-menu-content js-menu-content">
        <div className="dropdown-menu dropdown-menu-sw">
          {rows}
        </div>
      </div>
    )
  }
}
