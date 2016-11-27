import React, { Component, PropTypes } from 'react'
import reactStyles from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { APIs } from '../../APIs/'
import { actions } from '../../actions'
import style from './style'


const uiStates = states => ({
  ui: states.reducer,
})

const uiActions = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    ...APIs,
  }, dispatch),
})


@connect(uiStates, uiActions)
@reactStyles(style)
export default class Sample extends Component {
  render() {
    return (
      <div styleName="header">
        <a
          styleName="link"
          href="https://github.com/praneshr/smart-react-boilerplate"
        >
          Fork me on Github
        </a>
      </div>
    )
  }
}
