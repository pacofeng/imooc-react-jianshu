import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ margin: "20px" }}>
      <Input 
        value={props.inputValue} 
        placeholder="Todo List" 
        style={{ width: "500px", marginRight: "10px" }}
        onChange={props.onInputChange}
      />
      <Button 
        type="primary"
        onClick={props.onSubmitClick}
      >
        Submit
      </Button>
      <List
        style={{ marginTop: '10px', width: '500px' }}
        bordered
        dataSource={props.list}
        renderItem={ (item, index) => (<List.Item onClick={() => props.onItemClick(index)}>{item}</List.Item>) }
      />
    </div>
  )
};

export default TodoListUI;