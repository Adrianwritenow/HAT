import React, {Component} from 'react';
import {connect} from 'react-redux';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            full_name: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    register = (event) => {
        event.preventDefault();

        const register = this.props.register;
        register(this.state, () => {
          this.setState({
              email: "",
              full_name: "",
              password: ""
          })
        });
    }

    render() {
      return (
        <div className="Register">
          <form onSubmit={this.register}>
            <fieldset>
              <div className="input-single">
                  <input type="text" value={this.state.email} placeholder='Email' onChange={this.updateState('email')}/>
              </div>
              <div className="input-single">
                  <input type="text" value={this.state.full_name} placeholder='Full Name' onChange={this.updateState('full_name')}/>
              </div>
              <div className="input-single">
                  <input type="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
