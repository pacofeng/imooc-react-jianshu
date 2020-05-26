import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const searchMouseEnter = () => ({
  type: actionTypes.SEARCH_MOUSE_ENTER
});

export const searchMouseLeave = () => ({
  type: actionTypes.SEARCH_MOUSE_LEAVE
});

export const switchClick = (currentPage) => ({
  type: actionTypes.SWITCH_CLICK,
  currentPage
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data));
    }).catch((error) => {
      console.log(error);
    });
  }
};