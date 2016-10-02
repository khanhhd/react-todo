import React from 'react';
import _ from 'lodash';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null};
  }

  renderError(){
    if (!this.state.error) {
      return null;
    }
    return(
      <div style={{color: 'red'}}>{this.state.error}</div>
    );
  }

  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text"
          placeholder="what do I need to do"
          ref="createInput">
        </input>
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event){
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({error: validateInput});
      return null;
    }
    this.setState({error: null});
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    console.error(task);
    if (!task) {
      return 'Please input task.';
    } else if (_.find(this.props.todos, todo => todo.task === task)){
      return 'Task already exists.';
    } else {
      return null;
    }
  }
}

export default CreateTodo;
