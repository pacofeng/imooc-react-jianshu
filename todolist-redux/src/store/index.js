import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reduce from './reducer';
import todoSaga from './sagas'

// create the saga middleware
const saga = createSagaMiddleware();

const middleWares = [saga, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
  : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleWares));

const store = createStore(reduce, enhancer);

// then run the saga
saga.run(todoSaga);

export default store;