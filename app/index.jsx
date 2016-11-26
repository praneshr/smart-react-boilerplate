// @flow

import React from 'react'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Router from './router'
import store from './store'

/* This imports bootstrap globally.*/

import './globals/styles/index.global.scss'

/* By default, Bootstrap won't work with CSS modules. If you want to make it work with
CSS modules see './layout/index 2:1' */

const DefaultStore = store()

const renderNode = document.getElementById('app')

const renderIntoDOM = (Router) => {
  ReactDOM.render(
    <Provider store={DefaultStore}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>,
    renderNode
  )
}

const renderPage = () => {
  if (module.hot) {
    module.hot.accept('./router.jsx', () => {
      /* eslint global-require: 0 */
      const NextRouter = require('./router.jsx').default
      renderIntoDOM(NextRouter)
    })
  }
  renderIntoDOM(Router)
}

export default renderPage()
