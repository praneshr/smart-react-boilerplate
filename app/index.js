import React, { Component, PropTypes } from 'react'

import { AppContainer } from 'react-hot-loader'
import Layout from './layout/'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Test from './components/component'
import easyBind from 'react-easy-bind'
import page from 'page'
import store from './store'

const DefaultStore = store()

function renderIntoDOM(Node, props) {
  ReactDOM.render(
      <AppContainer>
        <Provider store={DefaultStore}>
          <Node/>
        </Provider>
      </AppContainer>,
    document.getElementById('app')
  )
}

function renderPage(data) {
  if (module.hot)
    module.hot.accept('./layout/index.jsx', () => {
      const NextApp = require('./layout').default
      renderIntoDOM(NextApp, data)
    })
  renderIntoDOM(Layout, data)
}

page('/test', (context) => {
  renderPage({ context })
})

page()
