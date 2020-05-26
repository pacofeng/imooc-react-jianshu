import * as actionTypes from './actionTypes';
import axios from 'axios';

const getDetailsAction = (title, content) => ({
  type: actionTypes.GET_DETAILS,
  title,
  content
});

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      dispatch(getDetailsAction(res.data.data.title, res.data.data.content));
    }).then((error) => {
      console.log(error);
    });
  };
};