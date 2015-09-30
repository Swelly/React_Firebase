import React from 'react';

class Header extends React.Component {

  render () {

    return (
      <div className="input-group">
        <input type="text" className="form-control">
          <span className="input-group-btn">
            <button className="btn-default">
              Add
            </button>
          </span>
        </input>
      </div>
    )
  }
}