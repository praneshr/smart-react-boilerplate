import React, { Component, PropTypes } from 'react'

import { allowMultiple } from '../../utils'
import reactStyles from 'react-css-modules'
import style from './style'

@reactStyles(style, allowMultiple)
export default class Sample extends Component {
  render() {
    return (
      <div styleName="header">
        <h1>React</h1>
      </div>
    )
  }
}
