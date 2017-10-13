import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logOutFromSession} from "../actions";


class BaseLayout extends Component {

  logOut = (event) => {
      event.preventDefault();
      console.log('click');
      this.props.logout();
      console.log('bang');
  }

  render(){
    return (
        <div className="navBarCont">
        <nav className="navbar navbar-dark ">
          <ul className="nav">
            <li>
              <NavLink className="button" exact to="/login">Log In</NavLink>
            </li>
            <li>
              <NavLink  className="button" exact to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink  className="button" exact to="/newHat">New Hat</NavLink>
            </li>
            <li>
              <NavLink className="button" exact to="/hatHistory">Hat History</NavLink>
            </li>
          </ul>
          <button className="button" onClick={this.logOut}>Log Out</button>
        </nav>
      {this.props.children}
    </div>

  );
}
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(logOutFromSession())
    }
}

export default connect(null, mapDispatchToProps)(BaseLayout);
