import * as actionTypes from './actionTypes';
import axios from 'axios';

const loginAction = () => ({
  type: actionTypes.LOGIN,
  logined: true
});

export const login = (username, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + username + '&password=' + password).then((res) => {
      if (res.data.data) {
        dispatch(loginAction());
      } else {
        alert('failed')
      }
    }).catch((error) => {
      console.log(error);
    });
    // axios.post('/api/login', data).then((res) => {
    //   dispatch(loginAction());
    // }).then((error) => {
    //   console.log(error);
    // });
  };
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  logined: false
});