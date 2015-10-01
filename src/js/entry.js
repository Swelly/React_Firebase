// import '../css/master.scss';
import React  from 'react';
import Rebase from 're-base';
import Header from './Header.jsx';
import List   from './List.jsx'

// Firebase Config with Rebase
let rootURL  = 'https://shining-inferno-2199.firebaseio.com/';
const base = Rebase.createClass(rootURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    // Crap, not sure how to do this one.
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

  // handleDataLoaded () {
  //   this.setState({
  //     loaded: true
  //   })
  // }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center">ReBase ToDo</h3>
              <Header add={this.handleAddItem.bind(this)} />
              <List items={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};


React.render(<App />, document.getElementById('app'));
