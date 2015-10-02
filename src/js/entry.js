import '../css/pages/_index.scss';
import React  from 'react';
import Rebase from 're-base';
import Header from './Header.jsx';
import List   from './List.jsx'

// Firebase Config with Rebase

const base = Rebase.createClass('https://shining-inferno-2199.firebaseio.com/');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loaded: false
    };
  }

  componentWillMount () {
    this.state.loaded = true;
  }

  componentDidMount() {
    this.ref = base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  handleDeleteItem(index) {
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center">ReBase ToDo</h3>
              <Header add={this.handleAddItem.bind(this)} />
              <div className={(this.state.loaded ? 'loaded' : '')}>
                <List items={this.state.list} delete={this.handleDeleteItem.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


React.render(<App />, document.getElementById('app'));
