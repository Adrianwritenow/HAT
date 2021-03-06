import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getHistoryLb} from '../actions';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryScatter } from 'victory';

// change gethistory to take only lb from psql db

class HatHistoryLb extends Component {

  constructor(props) {
      super(props);
      this.state = {
          hatHistory: "",
      }
  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:HatHistory");
  }




  getHistoryLb = (event) => {
    event.preventDefault();
    const getHistoryLb = this.props.getHistoryLb;
      console.log("BUTTON CLICKED");
      getHistoryLb();
  }


  render(){


    let content = null;

    if (this.props.chartData){
      content = (<VictoryChart theme={VictoryTheme.material} width={420} height={225}>
        <VictoryLine style={{ data: { stroke: "#c43a31", fontSize: 5 }, parent: { border: "1px solid #ccc", fontSize: 5}}}
        data={this.props.chartData}
        animate={{
        duration: 3000
      }}
        labels={(d) => `${d.x}`}
        style={{ labels: { fontSize: 5, fill: "white"}}}

      />
      <VictoryScatter
    style={{ data: { fill: "#c43a31" } }}
    size={7}
    data={this.props.chartData}

  />
      </VictoryChart>
    )
  }




    return (
      <div className="wrapper">
        <div className="dateForm">
          <form onSubmit={this.getHistoryLb}>
            <button className="button" type="submit">Update My Chart!</button>
          </form>
        </div>
        <div className='contentContainer'>
          {content}
        </div>
        <div className="lineGraphJumboTron">
          <h1>Your Levels</h1>
        </div>
      </div>

  );
}
}
const mapStateToProps = (state) => {
  return{
    chartData:state.reducer.history
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getHistoryLb: () => dispatch(getHistoryLb())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HatHistoryLb);
