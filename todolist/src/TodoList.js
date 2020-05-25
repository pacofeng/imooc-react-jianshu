import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

  state = {
    inputValue: '',
    list: []
  }

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  };

  onSubmitClick = () => {
    if (this.state.inputValue.trim() === '') return; 
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      this.input.focus();
    });
  };

  deleteItem = (index) => {
    this.setState((prevState) => {
      var newList = prevState.list.filter((item, i) => {
        return i !== index; 
      });
      return {
        list: newList,
      }
    });
  };

  getTodoItem = () => {
    return this.state.list.map((item, index) => {
      return (
        <CSSTransition
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el)=>{el.style.color='blue'}}
          appear={true}
          key={index}
        >
          <TodoItem item={item} index={index} deleteItem={this.deleteItem}/>
        </CSSTransition>
      )
    })
  }

  componentDidMount() {
    axios.get('api/todolist').then((res) => {
      this.setState(() => ({
        list: [...res.data]
      }));
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <Fragment>
      <div>
        <label htmlFor="itemInput">Item</label> 
        <input 
          value={this.state.inputValue} 
          onChange={this.onValueChange} 
          id="itemInput" 
          ref={(input) => { this.input = input }}
        /> 
        <button onClick={this.onSubmitClick}>Submit</button>  
      </div>
      <ul>
        <TransitionGroup>
          { this.getTodoItem() }
        </TransitionGroup>
      </ul>
      </Fragment>
    )
  }
}

export default TodoList;