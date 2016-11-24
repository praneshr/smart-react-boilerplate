import React, { Component, PropTypes } from 'react'
import reactStyles from 'react-css-modules'

import style from './style'

@reactStyles(style)
export default class Sample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="header">
        content is too long
      </div>
    );
  }
}
