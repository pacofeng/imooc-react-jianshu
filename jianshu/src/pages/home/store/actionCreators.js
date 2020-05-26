import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getHomeDataAction = (data) => {
  return {
    type: actionTypes.GET_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList
  }
};

const getMoreListAction = (list, currentArticlePage) => {
  return {
    type: actionTypes.GET_MORE_LIST,
    list: fromJS(list),
    currentArticlePage
  }
}

export const getHomeData = (data) => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(getHomeDataAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    })
  };
};

export const getMoreList = (currentArticlePage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + currentArticlePage).then((res) => {
      dispatch(getMoreListAction(res.data.data, currentArticlePage + 1 ))
    }).catch((error) => {
      console.log(error)
    })
  };
};

export const toggleTop = (show) => {
  return {
    type: actionTypes.TOGGLE_TOP,
    show
  }
}