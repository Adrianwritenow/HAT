import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class HatHistory extends Component {

  render(){
    return (
      <div className="wrapper">
        <div className="dateForm">
          <form>
            <input type="text" placeholder="What date do you want to Start?"/>
            <input type="text" placeholder="What date do you want to End?"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="lineGraphJumboTron">
          <h1>Level LineGraph HERE<h1>
        </div>

        <div className="emailToForm">
          <form>
          <input type="text" placeholder="What email do you want to send it to?"/>
            <button>send</button>
          </form>
        <div>
      </div>

  );
}
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HatHistory);
