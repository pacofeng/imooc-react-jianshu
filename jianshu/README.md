## styled-components
```
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`………`;
```
```
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

## combineReducers:
随着项目建设，如果将所有变量和逻辑都写在reducer中，会导致reducer文件变得臃肿且逻辑复杂。所以需要对reducer进行拆分。 使用"combineReducers"函数，对多个reducer进行整个，然后引出。 
```
import { combineReducers } from 'redux';

import headerReducer from '../common/header/store/reducer';

export default combineReducers({
    header: headerReducer
});
```

## immutable
1. immutable库提供一个fromJS方法，可以把一个JS对象转换为immutable（不可变）对象
2. 使用immutable.js之后，不能用“.”访问store中的对象，要使用get()方法
3. 使用immutable.js之后，修改store中的数据时，要使用set方法
4. immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象，并没有改变原始的state
```
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);    
        default:
            return state;
    }
};
```
## redux-immutable
把外层store／index.js 中的 commbineReducer 引入的库从redux 改成 redux-immutable
state.getIn(["header","focused"]) 等价于 state.get("header").get("focused")
 ```
import { combineReducers } from 'redux-immutable';
import { reducer as headReducer } from '../common/header/store';

export default combineReducers({
    header: headReducer
});
```

## react-loadable:
异步组件优化 
首页加载所有js文件，首次渲染加载过慢问题，react-loadable 模块可以解决此问题，使组件异步加载 
使用方法： 引入react-loadable组件，并在跟路由中组件路径加上为loadable.js层, 此时在组件里需要withRouter方法改写组件，才能正确获取原来的参数
