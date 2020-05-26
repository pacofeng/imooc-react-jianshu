import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Blog extends Component {

  render() {
    const { logined } = this.props;
    if (logined) {
      return (
        <div>BLOG Page</div>
      )
    } else {
      return <Redirect to="login" />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    logined: state.getIn(['login', 'logined'])
  }
};

export default connect(mapStateToProps, null)(Blog);