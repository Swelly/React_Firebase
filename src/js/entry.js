import '../css/master.scss';
import React from 'react';
import Rebase from 're-base';
import Header from './Header.jsx';

// Firebase URL
var base = Rebase.createClass('https://shining-inferno-2199.firebaseio.com/');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.ref = base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center">ReBase ToDo</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


React.render(<App />, document.getElementById('app'));