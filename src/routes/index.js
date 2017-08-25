import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from '../containers/app/App'
import Entry from '../containers/body/entry'
import Profile from '../containers/body/profile'
import Stars from '../containers/body/stars'
import Search from '../containers/body/search'

import Settings from '../containers/body/settings'
import SettingProfile from '../containers/body/settings/SettingProfile'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Entry },
  childRoutes: [
    { path: 'profile', component: Profile },
    { path: 'stars', component: Stars },
    { path: 'search',
      component: Search
    },
    { path: 'settings',
      component: Settings,
      indexRoute: { path: 'profile', component: SettingProfile },
      childRoutes: [
        { path: 'admin' },
        { path: 'emails' }
      ]
    }
  ]
}

export default routes
