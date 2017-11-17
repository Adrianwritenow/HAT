import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/App.css';
import BaseLayout from './containers/baseLayout';
import Register from "./containers/register";
import NewHat from "./containers/newHat";
import Login from "./containers/login";
import HatHistory from "./containers/hatHistory";
import HatDirectory from "./containers/hatDirectory";
import {loadTokenFromCookie} from './actions';
import {combineReducers, applyMiddleware } from 'redux';
import { withRouter } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {history} from './index';

import Splash from "./components/splash";

import { BrowserRouter, Route, Switch } from 'react-router-dom';




 class App extends Component {
  componentWillMount() {
    console.log("component mounted");
    }
    render() {
        return (
          <ConnectedRouter history={history}>
            <Switch>
              <BaseLayout>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/newHat" component={HatDirectory}/>
                <Route exact path="/newHatBS" component={NewHat}/>
                <Route exact path="/hatHistory" component={HatHistory}/>
              </BaseLayout>
            </Switch>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default connect(mapDispatchToProps,null, null, {pure: false} )(App);
