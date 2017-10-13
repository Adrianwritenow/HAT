import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../actions';

var randomToken = require('random-token');


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            auth_token:""
        }
    }
  componentDidMount(){
    console.log("COMPONENT MOUNTED");
  }


    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
            console.log("this state:",this.state)
            const token = randomToken(16);
            this.setState({auth_token: token});


        }
    }




    register = (event) => {
        event.preventDefault();
        console.log("this state in register:",this.state)

        const register = this.props.register;
        register(this.state, () => {
          this.setState({
              email: "",
              username: "",
              password: "",
              auth_token:""

          })

        });
        console.log("this state in register.js: ",this.state)

    }

    render() {
      return (
        <div className="Register">
          <form onSubmit={this.register}>
            <fieldset>
              <h3>REGISTER</h3>
              <div className="input-single">
                  <input type="text" name="email" value={this.state.email} placeholder='Email' onChange={this.updateState('email')}/>
              </div>
              <div className="input-single">
                  <input type="text" name="username" value={this.state.username} placeholder='User Name' onChange={this.updateState('username')}/>
              </div>
              <div className="input-single">
                  <input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
              </div>
              <button type="submit">Register</button>
            </fieldset>
          </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (regInfo, callback) => dispatch(register(regInfo, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
