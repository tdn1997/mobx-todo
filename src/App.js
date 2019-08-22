import React from 'react';
import './App.css';
import TodoList from './TodoList'

import { observable, configure, action} from "mobx"


configure({enforceActions: true})
class TodoStore {
  @observable todos = [
    {
      id: 1,
      content: "One"
    },
    {
      id: 2,
      content: "Two"
    }
  ]

  @action
  addTodo = (todo) => {
    this.todos.push(todo)
  }
  @action
  deleteTodo = (id) => {
    this.todos = this.todos.filter(item => item.id !== id)
  }
}

const todoStore = new TodoStore();


function App() {
  return (
    <React.Fragment>
      <TodoList store = {todoStore}/>
    </React.Fragment>
  );
}

export default App;
