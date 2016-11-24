import React, { Component, PropTypes } from 'react'

import style from './style'

export default class Sample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.hello}>
        <p>wewe.....</p>
      </div>
    );
  }
}
