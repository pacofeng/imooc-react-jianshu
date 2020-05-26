import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  logined: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN:
      return state.set('logined', action.logined);
    case actionTypes.LOGOUT:
      return state.set('logined', action.logined);
    default:
      return state;
  }
};

