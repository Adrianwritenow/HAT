import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getHistory} from '../actions';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryScatter } from 'victory';



class HatHistory extends Component {

  constructor(props) {
      super(props);
      this.state = {
          hatHistory: "",
      }
  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:HatHistory");
  }




  getHistory = (event) => {
    event.preventDefault();
    const getHistory = this.props.getHistory;
      console.log("BUTTON CLICKED");
      getHistory();
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
          <form onSubmit={this.getHistory}>
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
        getHistory: () => dispatch(getHistory())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HatHistory);
