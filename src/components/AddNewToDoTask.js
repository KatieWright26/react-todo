import React, { Component } from 'react';

class AddNewToDoTask extends Component {
  render() {
    return (
      <form>
        <input type="text" name="description" placeholder="Add a task to your list" />
        <input type="submit"/>
      </form>
    );
  }
}

export default AddNewToDoTask;