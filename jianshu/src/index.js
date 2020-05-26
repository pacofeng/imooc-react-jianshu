import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconFontStyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <IconFontStyle/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
