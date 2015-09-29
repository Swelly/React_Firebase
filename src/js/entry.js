// Importing CSS to entry point
import '../css/master.scss';

import React from 'react';
import Dropdown from './Dropdown.jsx';

var options = {
  title: "Choose a Genre",
  items:
  [
    'Adventure',
    'Action',
    'MMO',
    'Strategy'
  ],
  className: 'halaa'
};


var element = React.createElement(Dropdown, options);

React.render(
  element, document.getElementById('app')
);