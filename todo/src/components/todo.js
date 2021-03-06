import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  renderTodos() {
    return this.props.todoArray.map((todo, index) => {
      return (
        <li key={index}>{todo.value}</li>
      )
    })
  }

  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    )
  }

  const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
  }

}

export default connect(mapStateToProps)(TodoList);