import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        todoList: [
            {
                id: Date.now(),
                name: 'first todo'
            }
        ]
    };

    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo(newName) {
      const items = this.state.todoList.slice();
      items.push({
          id: Date.now(),
          name: newName
      });
      this.setState({
          todoList: items
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <AddTodo onAddTodo={this.onAddTodo}></AddTodo>
            <TodoList todoList={this.state.todoList}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
