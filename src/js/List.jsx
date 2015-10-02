import React from 'react';
// import ListItem from './ListItem.jsx';

class List extends React.Component {

  renderList() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>There are no ToDos</h4>
    } else {
      var listChildren = this.props.items.map((item, index) => {
        return (
          <div className="input-group">
              <span className="input-group-addon">
                  <input
                      type="checkbox"
                      onChange={this.handleDoneChange}
                  />
              </span>
              <input
                  type="text"
                  className="form-control"
                  key={item.key}
                  value={item.text}
              />
              <span className="input-group-btn">
                  <button className="btn btn-default">
                      Delete
                  </button>
              </span>
          </div>
        )

      });
      return (
        <div className="col-sm-12">
          {listChildren}
        </div>
      )
    }
  }

  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )

  }
}

module.exports = List;
