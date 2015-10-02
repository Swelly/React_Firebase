import React from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://shining-inferno-2199.firebaseio.com/');

class ListItem extends React.Component {
    state = {
        text: this.props.item,
        done: this.props.item.done
    };

    componentWillMount() {
    }

    handleDoneChange(e) {
        this.setState({done: e.target.checked})
    }

    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon">
                    <input
                        type="checkbox"
                        checked={this.state.done}
                        onChange={this.handleDoneChange}
                    />
                </span>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.text}
                />
                <span className="input-group-btn">
                    <button className="btn btn-default">
                        Delete
                    </button>
                </span>
            </div>
        )
    }
}

module.exports = ListItem;
