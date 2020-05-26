import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginWrapper, LoginBox, Input, Button } from './style';
import * as actionCreators from './store/actionCreators';

class Login extends PureComponent {
  render() {
    const { onLoginClick, logined } = this.props;
    if (logined) {
      return <Redirect to="/" />
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="username" ref={(input) => {this.username = input}}/>
            <Input placeholder="password" type="password" ref={(input) => {this.password = input}}/>
            <Button onClick={() => onLoginClick(this.username.value, this.password.value)}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    logined: state.getIn(['login', 'logined'])
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: function(username, password) {
      dispatch(actionCreators.login(username, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);