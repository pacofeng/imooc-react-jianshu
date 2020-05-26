import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  currentArticlePage: 1,
  showScroll: true
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case actionTypes.GET_MORE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        currentArticlePage: action.currentArticlePage
      });
    case actionTypes.TOGGLE_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
};

