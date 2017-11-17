import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

//weight tracker need to create database for weight
class HatDirectory extends Component {
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




  render(){
    return (
      <div className="wrapper">
      <div className='description'>
        <h1>WHAT DO YOU WANT TO TRACK?</h1>
      </div>
        <div className="levelFormContainer">
        <ul className="nav">
          <li>
            <NavLink className="button" exact to="/newHatBS">BLOOD SUGAR</NavLink>
          </li>
          <li>
            <NavLink  className="button" exact to="/newHatLB">WEIGHT</NavLink>
          </li>
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
