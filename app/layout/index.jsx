import React, { Component } from 'react'

import A from '../components/component'
import { APIs } from '../APIs/'
import _ from 'lodash'
import { actions } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    const Component = this.props.component
    return (
      <A/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
