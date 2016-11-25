import React, { Component, PropTypes } from 'react'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Router from './router'
import easyBind from 'react-easy-bind'
import store from './store'

const DefaultStore = store()

const renderNode = document.getElementById('app')

const renderIntoDOM = (Router) => {
  ReactDOM.render(
    <Provider store={DefaultStore}>
      <AppContainer>
        <Router/>
      </AppContainer>
    </Provider>,
    renderNode
  )
}

const renderPage = (data) => {
  if (module.hot)
    module.hot.accept('./router.js', () => {
      const NextRouter = require('./router').default
      ReactDOM.unmountComponentAtNode(renderNode)
      renderIntoDOM(NextRouter)
    })
  renderIntoDOM(Router)
}

export default renderPage()
