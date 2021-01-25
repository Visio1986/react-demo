import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭1', done: true },
      { id: '002', name: '吃饭2', done: false },
      { id: '003', name: '吃饭3', done: false }
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos })
  }
  updateTodo = (id, done) => {
    const { todos } = this.state;
    // eslint-disable-next-line array-callback-return
    const newTodos = todos.map((todo) => {
      if (todo.id === id)
        return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    this.setState({ todos: newTodos })
  }
  deleteDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteDone={this.deleteDone} />
          </div>
        </div>
      </div>
    );
  }
}


