import React from 'react'
import { connect } from 'react-redux'

import { resetBodyModal } from '../../actions'
import Entry from './entry'
import style from './index.scss'

export class Body extends React.Component {

  render() {
    const { content } = this.props
    return (
      <div>
        {content || <Entry/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    content: ownProps.children
  }
}

export default connect(mapStateToProps)(Body)
