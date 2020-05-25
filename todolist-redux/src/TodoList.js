import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import store from './store/';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoListAction, getInitListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodoListAction();
    this.props.getInitListAction();
  }

  render() {
    const { inputValue, list, onInputChange, onSubmitClick, onItemClick } = this.props;
    return (
      <TodoListUI 
        inputValue={inputValue} 
        onInputChange={onInputChange}
        onSubmitClick={onSubmitClick}
        onItemClick={onItemClick}
        list={list}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoListAction: () => {
      const action = getTodoListAction();
      dispatch(action);
    },
    getInitListAction: () => {
      const actionSaga = getInitListAction();
      store.dispatch(actionSaga);
    },
    onInputChange: (e) => {
      const action = getInputChangeAction(e.target.value)
      dispatch(action);
    },
    onSubmitClick: () => {
      const action = getAddItemAction();
      dispatch(action);
    },
    onItemClick: (index) => {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);