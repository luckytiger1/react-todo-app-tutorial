import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle() {
    return {
      background: '#04ccaf',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{ fontSize: '1.5em', fontWeight: '400' }}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
