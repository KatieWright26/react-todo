import React from 'react';

const ToDoItem = props => <li id={props.item.id} className={props.item.done ? 'complete' : ''} onClick={props.onClick}>{props.item.description}</li>

export default ToDoItem;