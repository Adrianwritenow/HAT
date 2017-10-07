import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../actions";
import {setToken} from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    login = (event) => {
        event.preventDefault();

        const login = this.props.login;
        login(this.state.username, this.state.password, () => {
          this.setState({
              username: "",
              password: ""
          });

        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.login}>
                    <fieldset>
                        <legend>{this.props.loggedIn
                                ? "Log in as a different user"
                                : "Log in"}</legend>
                        <div className="input-single">
                            <input type="text" name="username" value={this.state.username} placeholder='User Name' onChange={this.updateState('username')}/>
                        </div>
                        <div className="input-single">
                            <input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
                        </div>
                        <button type="submit">Login</button>
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
        login: (username, password, callback) => dispatch(login(username, password, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
