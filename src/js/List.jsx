import React from 'react';

class List extends React.Component {

  renderList () {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>There are no ToDos</h4>
    } else {
      var listChildren = this.props.items.map((item, index) => {
        return (
          <li key={index} className="list-group-item">
            <span>
              {item}
            </span>
          </li>
        )
      });
      return (
        <div className="col-sm-12">
          <ul className="list-group">
            {listChildren}
          </ul>
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