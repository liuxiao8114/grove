import React from 'react'
import HeaderSearch from './HeaderSearch.js'
import UserLink from './UserLink.js'

class Container extends React.Component {
  render() {
    return (
      <div>
        <HeaderSearch/>
        <UserLink/>
      </div>
    )
  }
}
