import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'


ReactDOM.render((
  // <Home />, call it through the router
  <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);