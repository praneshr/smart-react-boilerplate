import '../globals/styles/index.global.scss'

import React, { Component } from 'react'

import { APIs } from '../APIs/'
import Header from '../components/header'
import _ from 'lodash'
import { actions } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import reactStyles from 'react-css-modules'
import styles from './style'

function mapStateToProps(states) {
  return { ui: states.reducer }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        actions,
        APIs,
      ), dispatch),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@reactStyles(styles)
export default class Root extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <div styleName="page">
          <div className="container">
            {React.cloneElement(this.props.children, {...this.props})}
          </div>
        </div>
      </div>
    )
  }
}
