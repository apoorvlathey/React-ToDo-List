import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
//import uuid from 'uuid'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'

import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( { todos: res.data } ))
  }

  /* Toggle Completed Function */
  // Declaring function here and not in TodoItem, bcoz state can't be set from that file (w/o using redux,etc.)
  // Using Arrow function so that 'this' accessible
  // e is the event captured [default arg (in the last)]
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed //to toggle
        }
        return todo
      })
    })
  }

  /* Delete Todo */
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    })
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => {
      this.setState({
        todos: [ ...this.state.todos, res.data ]
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo} 
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
