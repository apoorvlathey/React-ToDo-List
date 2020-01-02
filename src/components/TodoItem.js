import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#ddd',
      padding: '10px',
      borderBottom: '1px #aaa dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    //object destructuring
    const { id, title } = this.props.todo

    /*
      jsx Inline Styling: 
      1. within {{}}  . First {} for jsx, second { } for style's jsObject
      2. No hyphen(-), instead CamelCase
      3. Instead of ; use , (bcoz object)
    */
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)}/> {/* <-- bind used to pass along the arguments, here: id */}
          { ' ' } {/* <-- to add space in html */}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: 'red',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 8px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
