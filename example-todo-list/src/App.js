import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './TodoCheckbox'
import MyData from "./MyData"

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: MyData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // state is a whole array of boolean values
    // setState will update the entire array
    // but only change the one which gets checked/unchecked
    this.setState(prevState => {
      // declare new const, updatedTodos
      // don't override prevState directly, because reasons
      const updatedTodos = prevState.todos.map(todo => {
        // if id is the selected id, 
        // then flip the boolean value of 'completed'
        if (todo.id == id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {todos: updatedTodos}
    })
  }

  render() {
    const todoArray = this.state.todos.map(item => 
      <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    
      return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
