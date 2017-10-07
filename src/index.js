import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory'
import reduxThunk from 'redux-thunk';



import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';


export const history = createHistory()


const middleware = routerMiddleware(history);


const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),compose(applyMiddleware(reduxThunk, middleware),window.devToolsExtension ? window.devToolsExtension() : (x) =>x)
);



ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();

 export default store;
