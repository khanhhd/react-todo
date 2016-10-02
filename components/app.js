import { Component } from 'react';
import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [
  {
    task: 'Learning react',
    isComplete: true
  },
  {
    task: 'Learning React',
    isComplete: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  createTask(task){
    this.state.todos.push({task, isComplete: false});
    this.setState({ todos: this.state.todos});
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isComplete = !foundTodo.isComplete;
    this.setState({ todos: this.state.todos  });
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(task){
    _.remove(this.state.todos, todo => todo.task === task);
    this.setState({ todos: this.state.todos });
  }

  render(){
    return(
      <div>
        <h1>React Todo App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodoList
          todos={todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this )}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
