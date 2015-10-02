import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {

  renderList () {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>There are no ToDos</h4>
    } else {
      var listChildren = this.props.items.map(item => {
        return (
          <ListItem
            key={item.key}
            item={item.text}
            className="list-group-item"
          >
          </ListItem>
        )
      });
      return listChildren
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
