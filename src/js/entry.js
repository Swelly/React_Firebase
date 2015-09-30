import '../css/master.scss';
import React from 'react';
import ReactFire from 'reactfire';
import Firebase from 'firebase';

var rootUrl = 'https://shining-inferno-2199.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function () {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <h2>Hi dude</h2>;
  }
});

var element = React.createElement(App, {});
var mountNode = document.getElementById('app');
React.render(<App />, mountNode);
