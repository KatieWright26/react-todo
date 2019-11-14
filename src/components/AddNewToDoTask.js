import React, { Component } from 'react';

class AddNewToDoTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: '',
    }
  }

  createNewItem = e => {
    this.setState({ newTask: e.target.value });
  }

  render() {
    const { addNewItem } = this.props;
    const { newTask } = this.state;
    return (
      <form onSubmit={e => {
        e.preventDefault();
        addNewItem(newTask);
        this.setState({ newTask: '' });
      }}>
        <input type="text" name="description" onChange={e => this.createNewItem(e)} placeholder="Add a task to your list" value={this.state.newTask} />
        <input type="submit"/>
      </form>
    );
  }
}

export default AddNewToDoTask;