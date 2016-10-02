import React from 'react';

class TodoListItem extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
  }

  onEditClick() {
    this.setState({isEditing: true});
  }

  onCancelClick() {
    this.setState({isEditing: false});
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    );
  }

  onDeleteClick(event){
    event.preventDefault();
    this.props.deleteTask(this.props.task);
  }

  onSaveClick(event){
    event.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing: false});
  }

  renderTaskSection(){
    const { task, isComplete } = this.props;
    const taskStyle = {
      color: isComplete ? 'green' : 'red', cursor: 'pointer'
    };
    if (this.state.isEditing) {
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }
    return(
      <td onClick={this.props.toggleTask.bind(this, task) } style={taskStyle}>{task}</td>
    );
  }
  render(){
    return(
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }
}

export default TodoListItem;
