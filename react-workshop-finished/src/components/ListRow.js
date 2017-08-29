import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class ListRow extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }

  onClick() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.rowId);
    }
  }

}
