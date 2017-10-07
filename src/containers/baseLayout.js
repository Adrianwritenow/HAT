import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render(){
    return (
        <div className="navBarCont">
        <nav className="navbar navbar-dark ">
          <ul className="nav">
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/login">Log In</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/newHat">New Hat</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/hatHistory">Hat History</NavLink>
            </li>
          </ul>
          <button className="logOutBtn">Log Out</button>
        </nav>
      {this.props.children}
    </div>

  );
}
}
