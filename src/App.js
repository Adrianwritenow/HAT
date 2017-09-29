import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/App.css';
import BaseLayout from './containers/baseLayout';
import Register from "./containers/register";
import NewHat from "./containers/newHat";
import Login from "./containers/login";

import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
    componentWillMount() {
    }
    render() {
        return (
          <BrowserRouter>
            <Switch>
              <BaseLayout>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/newHat" component={UserInfo}/>
                <Route exact path="/hatHistory" component={Register}/>
              </BaseLayout>
            </Switch>
          </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
