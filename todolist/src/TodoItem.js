import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  handleItemClick = () => {
    const { deleteItem, index } =  this.props;
    deleteItem(index);
  };

  // only render necessarily
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.item !== this.props.item;
  }

  render() {
    const { item } = this.props;
    return (
      <li
        onClick={() => this.handleItemClick()}
        dangerouslySetInnerHTML={{__html: item}}
      />
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

TodoItem.defaultProps = {
  item: 'Hello World'
};

export default TodoItem;