import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Blog from './pages/blog';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;