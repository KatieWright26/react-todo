import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

const items = [
  { id: 1, description: 'Go for a run', done: true},
  { id: 2, description: 'Wash dishes', done: false},
  { id: 3, description: 'Add to travel card', done: true}
]
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }

  handleClick(e, item) {
    this.setState((state) => {
      return state.items.map(i => i.id === item.id ? i.done = !i.done : i);
    })
  }

  render() {
    return (
      <div>
        <ul>
          {items.map(item => <ToDoItem key={item.id} item={item} onClick={(e) => this.handleClick(e, item)}/>)}
        </ul>
      </div>
    );
  }
}

export default ToDo;