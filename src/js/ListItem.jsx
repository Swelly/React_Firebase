import React from 'react';

class ListItem extends React.Component {
    render () {
        return (
            <li>
                {this.props.item}
            </li>
        )
    }
}

module.exports = ListItem;
