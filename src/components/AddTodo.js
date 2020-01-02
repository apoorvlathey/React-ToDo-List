import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  // Can use this function for any formFields as long as name same in state
  onChangeVal = (e) => this.setState({ [e.target.name] : e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{flex: '10', padding: '5px'}} 
          value={this.state.title}
          onChange={this.onChangeVal}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn" 
          style={{flex: '2'}} 
        />
      </form>
    )
  }
}

//PropTypes
AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  markTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default AddTodo