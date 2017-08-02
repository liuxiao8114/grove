import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './index.scss'

export default class SearchResult extends Component {
  render() {
    return (
      <div>
        Search Result: {<em>{this.props.result}</em>}
      </div>
    )
  }
}
