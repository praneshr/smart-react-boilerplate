import { Link, Redirect, Route, Router, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react'

import About from './pages/about'
import Header from './components/header'
import Intro from './pages/intro'
import Layout from './layout'
import NotFound from './components/not_found/'

export default class MyComponent extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Redirect from="/" to="/base" />
        <Redirect from="/base" to="/base/intro" />
        <Route path="/base" component={Layout}>
          <Route path="intro" component={Intro} />
          <Route path="about" component={About} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}
