import React, { Component, PropTypes } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyComponent">
        <button className="btn primary">Not Found</button>
      </div>
    );
  }
}
