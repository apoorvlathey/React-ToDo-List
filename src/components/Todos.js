import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class Todos extends Component {
  render() {
    // arrow function with paranthesis means to return. If using {}, explicitly define return statement
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={ todo.id } 
        todo={todo} 
        markComplete={this.props.markComplete} 
        delTodo={this.props.delTodo}
      />
    ))
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}