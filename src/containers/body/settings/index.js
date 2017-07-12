import React from 'react'
import styles from './index.scss'

import SettingsMenu from ''

import { settingsMenuList } from '../../../data-config'

export const Settings = () => {
  return (
    <div className={styles['settings-container']}>
      <SettingsMenu list={settingsMenuList}/>
      <div className="col-9 float-left">
        {this.props.children}
      </div>
    </div>
  )
}
