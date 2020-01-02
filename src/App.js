import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import uuid from 'uuid'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'

import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'clean room',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'study',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'code',
        completed: false
      }
    ]
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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {

    // Since key and value same (title), just input variable [ES6]
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [ ...this.state.todos, newTodo ]
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
