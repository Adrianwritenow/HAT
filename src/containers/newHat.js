import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export default class NewHat extends Component {

  componentWillMount() {
    console.log("component mounted");
    }
      constructor(props) {
          super(props);
          this.state = {
              username: "",
              user_id: ""
          }
      }

  render(){
    return (
      <div className="wrapper">
        <div className="levelFormContainer">
          <form>
            <input type="text" placeholder="What was your Level?"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="levelJumboTron">
          <h1>Level Jumbotron HERE</h1>
        </div>
        <div className="levelBar">
          <h1>Level Bar here</h1>
        </div>
        <div className="ailmentFormContainer">
          <form>
            <button>ailments go here</button>
            <button>save results</button>
          </form>
        </div>
      </div>

  );
}
}
