import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

//weight tracker need to create database for weight
export default class HistoryDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "",
            snap_Time:""
        }
    }
  componentDidMount(){
    console.log("COMPONENT MOUNTED:HistoryDirectory");
  }




  render(){
    return (
      <div className="wrapper">
      <div className='description'>
        <h1>WHAT DO YOU WANT TO LOOK UP?</h1>
      </div>
        <div className="levelFormContainer">
        <ul className="nav">
          <li>
            <NavLink className="button" exact to="/hatHistory">BLOOD SUGAR</NavLink>
          </li>
          <li>
            <NavLink  className="button" exact to="/hatHistoryLB">WEIGHT</NavLink>
          </li>
        </ul>
        </div>
      </div>

  );
}
}
