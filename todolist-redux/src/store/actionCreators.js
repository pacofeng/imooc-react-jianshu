import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
});

export const getDeleteItemAction = (value) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  value
});

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST,
  data
});

export const getTodoListAction = () => {
  return (dispatch) => {
    axios.get('http://localhost:8888/todolist.json').then((res) => {
      const action = initListAction(res.data);
      dispatch(action);
    }).catch((error) => {
      console.log(error)
    });
  }
};


export const getInitListAction = () => ({
  type: actionTypes.GET_INIT_LIST
});
