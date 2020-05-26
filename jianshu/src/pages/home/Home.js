import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';
import BannerImg from '../../statics/banner.jpg';
import * as actionCreators from './store/actionCreators';

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.scrollTop);
  }

  onBackTopClick() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.scrollTop);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={BannerImg} alt="banner"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ?  <BackTop onClick={this.onBackTopClick}>Top</BackTop> : null
        }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData: () => {
      dispatch(actionCreators.getHomeData());
    },
    scrollTop: () => {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleTop(true));
      } else {
        dispatch(actionCreators.toggleTop(false)); 
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);