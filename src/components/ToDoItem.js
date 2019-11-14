import React from 'react';

const ToDoItem = props => <li id={props.task.id} className={props.task.done ? 'complete' : ''} onClick={props.onClick}>{props.task.description}</li>

export default ToDoItem;