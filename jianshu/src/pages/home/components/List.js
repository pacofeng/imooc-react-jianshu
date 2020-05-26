import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItem, ListInfo, LoadMore } from '../style';
import * as actionCreators from '../store/actionCreators';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, currentArticlePage } = this.props;
    return (
      <div>
        {
          articleList.map((article, index) => {
            return (
              <Link to={'/detail/' + article.get('id')} key={index}>
                <ListItem>
                  <img className="pic" src={article.get('imgUrl')} alt={article.get('title')}/>
                  <ListInfo>
                    <h3 className="title">{article.get('title')}</h3>
                    <p className="desc">{article.get('desc')}</p>  
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(currentArticlePage)}>More...</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    currentArticlePage: state.getIn(['home', 'currentArticlePage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList: (currentArticlePage) => {
      dispatch(actionCreators.getMoreList(currentArticlePage))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);