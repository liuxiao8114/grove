import React from 'react'
import styles from './index.scss'

import SettingsMenu from './SettingsMenu'

import { settingsMenuList } from '../../../data-config'

export const Settings = () => {
  return (
    <div className={styles['settings-container']}>
      <SettingsMenu list={settingsMenuList}/>
      {this.props.children}
    </div>
  )
}
