import React, { Component, PropTypes } from 'react'
import Bootstrap from 'bootstrap-global'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import reactStyles from 'react-css-modules'
import { APIs } from '../APIs/'
import Header from '../components/header'
import { actions } from '../actions'
import styles from './style'


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
@reactStyles({ ...styles, ...Bootstrap })
export default class Root extends Component {
  async componentDidMount() {
    const { data } = await this.props.actions.sampleApi()
    this.props.actions.sample(data)
  }
  render() {
    console.log(this.props.ui);
    return (
      <div id="layout">
        <Header />
        <div styleName="page">
          <div styleName="container">
            { this.props.children }
            {/* You can also pass the states and actions as a props to the children.
            You need to replace the above line with:

                { React.cloneElement(this.props.children, {...this.props}) }

            By doing this you don't need to use @connect() in every component to retrive
            the states and the actions from redux*/}
          </div>
        </div>
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.objectOf(PropTypes.func),
  ui: PropTypes.objectOf(PropTypes.any),
}
