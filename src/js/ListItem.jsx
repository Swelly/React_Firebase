import React from 'react';

module.exports = React.createClass({

  // Hand off 'item' that was clicked to Dropdown handler
  handleClick: function () {
    this.props.whenItemClicked(this.props.item);
  },

  render: function () {
    return  <li className={this.props.className}>
              <a onClick={this.handleClick}>{this.props.item}</a>
            </li>;
  }
})