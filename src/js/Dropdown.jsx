import React from 'react';
import Button from './Button.jsx';
import ListItem from './ListItem.jsx';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      itemTitle: this.props.title
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleClick() {
    // Set the state to the opposite of current val & re-render
    this.setState({open: !this.state.open})
  }

  // Recieved from ListItem event
  handleItemClick(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  }

  render () {
    const open = this.state.open;

    // Bind List items to whenItemClicked
    var list = this.props.items.map(function(item){
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick}
              // When current itemTitle === this item | set 'active' class
              className={this.state.itemTitle === item ? 'active' : "" }
              />;
    }.bind(this));

    // Render component to the DOM
    return (
      <div className="dropdown clearfix">
        <Button
          whenClicked={this.handleClick}
          title={this.state.itemTitle || this.props.title}
          className="btn-dropdown"
          subtitleClassName="caret"
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
          {list}
        </ul>
      </div>
    )
  // End Render
  }
}
