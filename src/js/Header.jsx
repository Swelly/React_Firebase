import React from 'react';

module.exports = React.createClass ({

  render: function () {

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
  },
  // End Return
  handleClick: function() {
    // Send value of text input to Firebase
    console.log("I was clicked");
  }
});