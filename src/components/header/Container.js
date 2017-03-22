import React from 'react'
import HeaderSearch from './HeaderSearch.js'
import HeaderLinksContainer from './HeaderLinksContainer.js'

/*
<HeaderSearch/>
<HeaderLinksContainer/>
*/
export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        Hello Git!
      </div>
    )
  }
}
