import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddNewToDoTask from './AddNewToDoTask';

const starterTasks = [
  { id: 1, description: 'Go for a run', done: true},
  { id: 2, description: 'Wash dishes', done: false},
  { id: 3, description: 'Add to travel card', done: true}
]

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: starterTasks
    };
  }

  handleClick(e, task) {
    this.setState((state) => {
      return state.tasks.map(i => i.id === task.id ? i.done = !i.done : i);
    })
  }

  render() {
    const { tasks } = this.state;
    const undoneTasks = tasks.reduce((acc, i) => i.done ? acc : acc + 1, 0)
    return (
      <div>
          {undoneTasks > 0 ? (
            <h1>
              You have {undoneTasks} of {tasks.length} task
              {tasks.length > 1 ? "s" : ""} left to do.
            </h1>
          ) : (
            <h1>
              No tasks remaining!
            </h1>
          )}
        <AddNewToDoTask />
        <ul className="listContainer">
          {tasks.map(task => (
            <ToDoItem
              key={task.id}
              task={task}
              onClick={e => this.handleClick(e, task)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;