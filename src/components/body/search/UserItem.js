import React from 'react'

import style from './UserItem.scss'

const UserItem = ({ item }) => {
  const {
    login,
    avatarUrl
  } = item
  
  return (
    <div className={style['repo-list-item']}>
      <p>{login}</p>
      <p>{avatarUrl}</p>
    </div>
  )
}

export default UserItem
