import React, { Component, PropTypes } from 'react'
/* [5:1]
'bootstrap-global' is a webpack resolve alias.
*/
import Bootstrap from 'bootstrap-global'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import reactStyles from 'react-css-modules'
import { APIs } from '../APIs/'
import Header from '../components/header'
import { actions } from '../actions'
import styles from './style'
import Footer from '../components/footer'


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
/* [33:1]
combining 'layout' styles and Bootstrap styles
to make it work with React CSS Modules.
*/
@reactStyles({ ...styles, ...Bootstrap })
export default class Root extends Component {

  componentDidMount() {
    this.props.actions.sampleApi()
    .then(({ data }) => this.props.actions.sample(data))
  }

  render() {
    return (
      <div id="layout">
        <Header />
        <div styleName="page">
          <div styleName="container">
            {/* [56:14]
              You can also pass the states and actions as a props to the children.
              You need to replace the below line with:

              { React.cloneElement(this.props.children, {...this.props}) }

              By doing this you don't need to use @connect() in every component to retrive
              the states and the actions from redux.
              */}
            { this.props.children }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.shape(),
}
