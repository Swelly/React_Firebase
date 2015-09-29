import '../css/master.scss';
import React from 'react';

class UserName extends React.Component {
  render() {
    return <h2>Name: {this.props.name}</h2>;
  }
}

class User extends React.Component {
  render() {
    return <div>
        <UserName name={this.props.user.name} />
        <h3>City: {this.props.user.city}</h3>
      </div>;
  }
}
var mountNode = document.getElementById('app');
var user = { name: 'John', city: 'San Francisco' };
React.render(<User user={user} />, mountNode);