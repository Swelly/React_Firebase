import '../css/master.scss';
import React from 'react';

import ReactFire from 'reactfire';
import Firebase from 'firebase';

import Header from './Header.jsx';

// Firebase URL
var rootUrl = 'https://shining-inferno-2199.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function () {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel">
      <div className="eighth">
        <h2 className="title center">To-Do List</h2>
      </div>
      <Header />
    </div>
  }
});

var element = React.createElement(App, {});
var mountNode = document.getElementById('app');
React.render(<App />, mountNode);
