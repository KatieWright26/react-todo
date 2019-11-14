import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import AddNewToDoTask from './AddNewToDoTask';
import Header from './Header';

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
    this.addNewItem = this.addNewItem.bind(this)
  }

  handleClick(e, task) {
    this.setState((state) => {
      return state.tasks.map(i => i.id === task.id ? i.done = !i.done : i);
    })
  }

  addNewItem(task) {
    let nextId = this.findNextId(this.state.tasks);
    this.setState((state) => {
      return state.tasks.push({ id: nextId, description: task, done: false });
    });
  }

  findNextId(tasks) {
    let id = tasks.reduce((acc, t) => acc > t.id ? acc : acc = t.id, 0);
    return id + 1;
  }

  render() {
    const { tasks } = this.state;
    const undoneTasks = tasks.reduce((acc, i) => i.done ? acc : acc + 1, 0);

    return (
      <div>
        <Header undoneTasks={undoneTasks} tasks={tasks.length}/>
        <AddNewToDoTask addNewItem={this.addNewItem}/>
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