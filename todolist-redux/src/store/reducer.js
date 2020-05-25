import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case actionTypes.CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case actionTypes.ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case actionTypes.DELETE_TODO_ITEM:
      newState.list = newState.list.filter((item, i) => {
        return i !== action.value;
      })
      return newState;
    case actionTypes.INIT_LIST:
      newState.list = action.data;
      return newState;
    case actionTypes.GET_INIT_LIST:
      newState.list = action.data;
      return newState;
    default:
      return state;
  }
}