import React, { Component, PropTypes } from 'react'

import { AppContainer } from 'react-hot-loader'
import Layout from './layout/'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import easyBind from 'react-easy-bind'
import store from './store'

const DefaultStore = store()

@easyBind
export default class Render {
  constructor(renderNode) {
    this.renderNode = renderNode
  }

  renderIntoDOM(Node, props) {
    ReactDOM.render(
      <Provider store={DefaultStore}>
        <AppContainer>
          <Node {...props}/>
        </AppContainer>
      </Provider>,
      this.renderNode
    )
  }

  renderPage(data) {
    if (module.hot)
      module.hot.accept('./layout/index.js', () => {
        const NextApp = require('./layout/index').default
        // ReactDOM.unmountComponentAtNode(this.renderNode)
        this.renderIntoDOM(NextApp, data)
      })
    this.renderIntoDOM(Layout, data)
  }
}
