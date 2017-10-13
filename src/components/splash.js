import React, {Component} from 'react';


export default class Splash extends Component {

  render(){
    return (
      <div className=" splashWrapper">
        <div className="hatLogo">
          <div className="hatBanner"><h1>H.A.T.</h1></div>
          <img  src={require('./HATLOGO.png')} alt="the logo"/>
        </div>
        <div className="hatFooter"><h4>Health Anomaly Tracker</h4></div>
      </div>

  );
}
}
