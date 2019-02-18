import React from "react"
import myData from "./myData"
import TodoItem from "./TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: myData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo =>
        {
          if (todo.id === id) {
            todo.completed =! todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

export default App