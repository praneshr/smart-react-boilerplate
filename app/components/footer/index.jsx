import React from 'react'
import reactStyles from 'react-css-modules'

import styles from './style'

@reactStyles(styles)
export default class Footer extends React.Component {

  render() {
    return (
      <div styleName="footer">
        Made with <span styleName="heart">♥</span> by
        <a href="http://github.com/praneshr"> Pranesh Ravi</a>
      </div>
    );
  }
}
