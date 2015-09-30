import React from 'react';

class Header extends React.Component {
  state = {
    text: ''
  }

  handleClick () {
    // Send value of text input to firebase
    console.log("I was clicked!");
  }

  handleInputChange (event) {
    this.setState({text: event.target.value});
  }

  render () {
    return (
      <div className="input-group">
        <input
          value={this.state.text}
          onChange={this.handleInputChange.bind(this)}
          type="text"
          ref="newItem"
          placeholder="New Item"
          className="form-control"/>
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-default"
            type="button">
            Add
          </button>
        </span>
      </div>
    )
  }
}

module.exports = Header;