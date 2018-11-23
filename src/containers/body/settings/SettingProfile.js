import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './SettingProfile.scss'

const InputCell = (id, name, placeholder) => {
  return (
    <div>

    </div>
  )
}

const SelectCell = () => {
}

const TextareaCell = () => {

}

class SettingProfile extends Component {
  handleClick() {

  }

  render() {
    return (
      <div className="col-9 float-left">
        <div className="subhead mt-0 mb-0">
          <h2 className="subhead-heading">Public Profile</h2>
        </div>
        <form action="/users/liuxiao8114" className="columns">
          <div className="column two-thirds">

          </div>
        </form>
      </div>
    )
  }
}

export default SettingProfile
