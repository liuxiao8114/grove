import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from '../containers/app/App'
import Entry from '../containers/body/entry'
import Profile from '../containers/body/profile'
import Stars from '../containers/body/stars'

import Settings from '../containers/body/settings'
import SettingProfile from '../containers/body/settings/SettingProfile'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Entry },
  childRoutes: [
    { path: 'profile', component: Profile },
    { path: 'stars', component: Stars },
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
/*
<Route path="/" component={App}>
  <IndexRoute component={Entry}/>
  <Route path="profile" component={Profile}></Route>
  <Route path="pulls"></Route>
  <Route path="issues"></Route>
  <Route path="gist"></Route>
  <Route path="stars" component={Stars}></Route>
  <Route path="/:username"></Route>
  <Route path="/settings" component={Settings}>
    <IndexRoute path="profile" component={}></IndexRoute>
    <Route path="admin"></Route>
    <Route path="emails"></Route>
  </Route>
  <Route component={Settings}>
    <Route path="admin"></Route>
    <Route path="emails"></Route>
  </Route>
</Route>
*/
