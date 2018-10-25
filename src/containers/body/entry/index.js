import React from 'react'
import { connect } from 'react-redux'

import RepositriesZone from ''
import ActivitiesZone from ''
import Alerts from ''

export default class Entry extends React.Component {
  constructor(props) {
    super(props)
  }

  component() {

  }

  render() {
    return (
      <div>
        <RepositriesZone/>
        <ActivitiesZone/>
      </div>
    )
  }
}
