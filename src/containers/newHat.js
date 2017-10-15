import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {sendLevel} from '../actions';


class NewHat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "",
            snap_Time:""
        }
    }
  componentDidMount(){
    console.log("COMPONENT MOUNTED:NEWHAT");
  }

  updateState = (field) => {
      return (event) => {
          this.setState({[field]: event.target.value})
      }
      console.log("this state:",this.state)
  }

  sendLevel = (event) => {
      event.preventDefault();
      var dt = new Date();
      var utcDate = dt.toUTCString();

      console.log(utcDate);
      this.setState({snap_Time:utcDate});

      const sendLevel = this.props.sendLevel;
      if (this.state.level === "") {
        console.log('you need to enter something');
        return;

      }else{

      sendLevel({level:this.state.level,snap_Time:utcDate}, () => {
        this.setState({
          level: "",
          snap_Time:""
        })

      });

  }
}
  render(){
    return (
      <div className="wrapper">
      <div className='description'>
        <h1>PLEASE ENTER YOUR BLOOD SUGAR LEVEL</h1>
      </div>
        <div className="levelFormContainer">
          <form onSubmit={this.sendLevel}>
            <input type="text" value={this.state.level} onChange={this.updateState('level')} placeholder="What was your Level?"/>
            <button className='button' type="submit">Submit</button>
          </form>
        </div>
      </div>

  );
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendLevel: (levelInfo, callback) => dispatch(sendLevel(levelInfo, callback))
    }
}

export default connect(null,mapDispatchToProps)(NewHat);
