import { Component } from 'react';
import React from 'react';

class TodoListHeader extends Component  {
  render(){
    return(
      <thead>
        <tr>
        <th>Task</th>
        <th>Action</th>
        </tr>
      </thead>
    );
  }
}

export default TodoListHeader;
