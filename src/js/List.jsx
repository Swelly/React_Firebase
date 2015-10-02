import React from 'react';
// import ListItem from './ListItem.jsx';

class List extends React.Component {

  checkRenderList() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>There are no ToDos</h4>
    } else {
      var listChildren = this.props.items.map((item, index) => {
        return (
          <li key={index} className="list-group-item">
            <div className="input-group">
                <span className="input-group-addon">
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={this.props.itemStatus.bind(null, index)}
                    />
                </span>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={item.text}
                />
                <span className="input-group-btn">
                    <button
                      className="btn btn-delete"
                      onClick={this.props.delete.bind(null, index)}
                    >
                    Delete
                    </button>
                </span>
            </div>
          </li>
        )
      });
      return (
        <ul className="list-group">
          {listChildren}
        </ul>
      )
    }
  }

  render () {
    return this.checkRenderList();
  }
}

module.exports = List;
