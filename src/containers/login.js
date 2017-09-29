import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }


    render() {
        return (
            <div className="Login">
                <form>
                    <fieldset>
                        <legend>{this.props.loggedIn
                                ? "Yoy are already Logged in"
                                : "Log in"}</legend>
                        <div className="input-single">
                            <input type="text" value={this.state.email} placeholder='Email' onChange={this.updateState('email')}/>
                        </div>
                        <div className="input-single">
                            <input type="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
