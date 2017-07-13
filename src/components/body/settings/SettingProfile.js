import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './SettingProfile.scss'

class SettingPublicProfile extends Component {
  handleClick() {
    return
  }

  render() {
    return (
      <div className="col-9 float-left">
        <div className="subhead mt-0 mb-0">
          <h2 className="subhead-heading">Public Profile</h2>
        </div>
        <form action="/users/liuxiao8114" className="columns">
          <div className="column two-thirds">
            <dl className="form-group">
              <dt>
                <label for="user_profile_name">Name</label>
              </dt>
              <dd>
                <input type="text" className="form-control" id="user_profile_name" name="user[profile_name]" />
              </dd>
            </dl>
            <dl className="form-group">
              <dt>
                <label for="user_profile_email">Public email</label>
              </dt>
              <dd>
                <select name="user[profile_email]" id="user_profile_email" className="form-select select">
                  <option value="">Select a varified email to display</option>
                  <option value="">liuxiao8114@163.com</option>
                  <option value="">1042443484@qq.com</option>
                </select>
              </dd>
            </dl>
            <dl className="form-group">
              <dt>
                <label for="user_profile_bio">Bio</label>
              </dt>
              <dd>
                <textarea id="" className="form-control"></textarea>
                <p className="note"></p>
              </dd>
            </dl>
            <dl className="form-group">
              <dt>
                <label for="user_profile_blog">URL</label>
              </dt>
              <dd>
                <input id="user_profile_blog" name="user[profile_blog]" size="30" type="url" />
              </dd>
            </dl>
            <hr />
            <dl className="form-group">

            </dl>
            <p>
              <button className="btn btn-primary" type="submit"></button>
            </p>

          </div>
        </form>
      </div>
    )
  }
}

export default SettingPublicProfile
