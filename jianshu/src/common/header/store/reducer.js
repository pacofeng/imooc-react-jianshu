import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  currentPage: 0,
  totalPage: 0
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS: 
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR: 
      return state.set('focused', false);
    case actionTypes.SEARCH_MOUSE_ENTER: 
      return state.set('mouseIn', true);
    case actionTypes.SEARCH_MOUSE_LEAVE: 
      return state.set('mouseIn', false);
    case actionTypes.SWITCH_CLICK: 
      return state.set('currentPage', action.currentPage);
    case actionTypes.CHANGE_LIST: 
      return state.set('list', action.list).set('totalPage', action.totalPage);
    default:
      return state;
  }
};

