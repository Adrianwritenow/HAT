import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export default class NewHat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "",
            ailments:[""]
        }
    }
  componentDidMount(){
    console.log("COMPONENT MOUNTED");
  }

  updateState = (field) => {
      return (event) => {
          this.setState({[field]: event.target.value})
      }
      console.log("this state:",this.state)

  }


  render(){
    return (
      <div className="wrapper">
        <div className="levelFormContainer">
          <form onSubmit={this.sendLevel}>
            <input type="text" value={this.state.level} onChange={this.updateState('level')} placeholder="What was your Level?"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            {this.state.level}
          </div>
        </div>
        <div className="ailmentFormContainer">
          <form onSubmit={this.sendAilment}>
            <button>ailments go here</button>
            <button>save results</button>
          </form>
        </div>
      </div>

  );
}
}
