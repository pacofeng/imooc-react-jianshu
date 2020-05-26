import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style';

class Header extends Component {
  
  getList = () => {
    const { focused, mouseIn, list, currentPage, totalPage, onSearchMouseEnter, onSearchMouseLeave, onSwitchClick } = this.props;
    const currentList = list.filter((item, index) => {
      return index >= currentPage * 10 && index < (currentPage + 1) * 10;
    });
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={onSearchMouseEnter}
          onMouseLeave={onSearchMouseLeave}
        >
          <SearchInfoTitle>
            Search Trending
            <SearchInfoSwitch onClick={() => onSwitchClick(currentPage, totalPage, this.spinIcon)}>
            <i ref={(ref) => { this.spinIcon = ref; }} className="iconfont spin">&#xe851;</i>  
              Switch
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { 
              currentList.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const { focused, list, logined, onSearchFocus, onSearchBlur, onLogoutClick } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/"><NavItem className="left active">Home</NavItem></Link>
          <NavItem className="left">Download</NavItem>
          {
            logined 
              ? <NavItem className="right" onClick={onLogoutClick}>Logout</NavItem> 
              : <Link to="/login"><NavItem className="right">Login</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => onSearchFocus(list)}
                onBlur={onSearchBlur}
              />
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe688;</i>
            { this.getList() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/blog">
            <Button className="blog">
              <i className="iconfont">&#xe6e5;</i>
              Blog
            </Button>
          </Link>
          <Button className="signup">Sign Up</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage']),
    logined: state.getIn(['login', 'logined'])
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearchFocus: function(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    onSearchBlur: function() {
      dispatch(actionCreators.searchBlur());
    },
    onSearchMouseEnter: function() {
      dispatch(actionCreators.searchMouseEnter());
    },
    onSearchMouseLeave: function() {
      dispatch(actionCreators.searchMouseLeave());
    },
    onSwitchClick: function(currentPage, totalPage, spinElement) {
      const originRotate = parseInt(spinElement.style.transform.replace(/[^0-9]/ig, '')) || 0;
      spinElement.style.transform = `rotate(${ originRotate + 360 }deg)`;
      
      if (currentPage < totalPage - 1) {
        currentPage++;
      } else {
        currentPage = 0
      }
      dispatch(actionCreators.switchClick(currentPage));
    },
    onLogoutClick: function() {
      dispatch(loginActionCreators.logout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);