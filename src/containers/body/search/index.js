import React, { Component } from 'react'
import { Link } from 'react-router'
import SignInForm from './SignInForm'

import style from './index.scss'

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchResultNav/>
        <SearchResult/>
      </div>
    )
  }
}
