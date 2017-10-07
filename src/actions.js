import request from "superagent";
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';



export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';



const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
}

export const setToken = makeActionCreator(SET_TOKEN);
const setUser = makeActionCreator(SET_USER);
const setError = makeActionCreator(SET_ERROR);


export const register = ({
    email,
    password,
    username,
    auth_token
}, callback) => {
    return (dispatch, getState) => {
      console.log("bout to send a post");
        request
            .post("http://localhost:3001/register")
            .send({email: email, password: password, username: username, auth_token:auth_token})
            .end((err, res) => {
                if (err) {
                    return dispatch(setError(err));
                } else {
                    dispatch(setError(null));
                }
                if (callback) {
                    callback();
                }

            })
            console.log('check:');
    }
}
export const logOutFromSession = () =>{
  return (dispatch) => {
  dispatch(setToken(null));
  Cookies.set('token', {expires: 0});
  }
}

export const loadTokenFromCookie = () => {
    return (dispatch) => {
        const token = Cookies.get('token');
        if (token) {
          console.log('im a token:',token)
            dispatch(setToken(token));
        }
    }
}

export const login = (username, password, callback) => {
    return (dispatch, getState) => {
      console.log('bout to login');
        request
            .post("http://localhost:3001/login")
            .send({username: username, password: password})
            .end((err,response) => {
                if (err) {
                    return dispatch(setError(err));
                } else {
                  dispatch(setError(null));
                  console.log("res authtoken",response.body.auth_token);

                  Cookies.set('token', response.body.auth_token, {expires:7});
                  dispatch(setUser({email: response.body.email, 'username': response.body.username, id: response.body.id}))
                  dispatch(loadTokenFromCookie());
                  dispatch(getDashboard());
                    console.log("bang")
                }
                if (callback) {
                    callback();
                }
            })
    }
}

export const getDashboard = (token) => {
    return (dispatch, getState) => {
      token = token || getState().reducer.token;
      console.log('im the token in DCashboard:', token);
        if (!token) {
          console.log("Hello");
            return;
        }else{
          console.log("Henlo");
          dispatch(push('/newHat'));
    }
  }
}
