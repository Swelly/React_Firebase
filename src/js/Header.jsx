import React from 'react';

class Header extends React.Component {

  handleClick() {
    // Send value of text input to firebase
    console.log("I was clicked");
  }

  render () {
    return (
      <div className="input-group">
        <input type="text" className="form-control">
          <span className="input-group-btn">
            <button
              onClick={this.handleClick}
              className="btn-default">
              Add
            </button>
          </span>
        </input>
      </div>
    )
  }
}