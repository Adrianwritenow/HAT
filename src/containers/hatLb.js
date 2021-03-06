import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {sendLevelLb} from '../actions';

// need to add a weight tracker
class HatLb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "",
            snap_Time:""
        }
    }
  componentDidMount(){
    console.log("COMPONENT MOUNTED:HatLb");
  }

  updateState = (field) => {
      return (event) => {
          this.setState({[field]: event.target.value})
      }
      console.log("this state:",this.state)
  }

  sendLevelLb = (event) => {
      event.preventDefault();
      var dt = new Date();
      var utcDate = dt.toUTCString();

      console.log(utcDate);
      this.setState({snap_Time:utcDate});

      const sendLevelLb = this.props.sendLevelLb;
      if (this.state.level === "") {
        console.log('you need to enter something');
        return;

      }else{

      sendLevelLb({level:this.state.level,snap_Time:utcDate}, () => {
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
        <h1>PLEASE ENTER YOUR WEIGHT</h1>
      </div>
        <div className="levelFormContainer">
          <form onSubmit={this.sendLevelLb}>
            <input type="text" value={this.state.level} onChange={this.updateState('level')} placeholder="How much do you weigh?"/>
            <button className='button' type="submit">Submit</button>
          </form>
        </div>
      </div>

  );
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendLevelLb: (levelInfo, callback) => dispatch(sendLevelLb(levelInfo, callback))
    }
}

export default connect(null,mapDispatchToProps)(HatLb);
