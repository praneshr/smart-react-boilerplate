import React, { Component } from 'react'

import Header from '../components/header'
import { APIs } from '../APIs/'
import _ from 'lodash'
import { actions } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from '../pages/about'

const config = {
  about: About
}

function mapStateToProps(states) {
  return { ui: states.reducer };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        actions,
        APIs,
      ), dispatch), //Add additional actions inthe Object.assign() method
  }
}

class Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Page = config[this.props.component]
    return (
      <div>
        <Header/>
        <Page/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
