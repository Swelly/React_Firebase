import React from 'react';

class Header extends React.Component {
  state = {
    text: ''
  }

  handleClick ()  {
    // Send value of text input to Firebase
    this.props.add({
      text: this.state.text,
      done: false
    });
    this.setState({text: ''});
  }

  handleInputChange = (e) => {
    this.setState({text: e.target.value});
  }

  render () {
    return (
      <div className="input-group">
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          type="text"
          ref="newItem"
          placeholder="New Item"
          className="form-control"/>
        <span className="input-group-btn">
          <button
            onClick={this.handleClick.bind(this)}
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