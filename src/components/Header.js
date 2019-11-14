import React from 'react';

const Header = props => {
  return (
    <>
      {props.undoneTasks > 0 ? (
        <h1>
          You have {props.undoneTasks} of {props.tasks} task
          {props.tasks > 1 ? "s" : ""} left to do.
        </h1>
      ) : (
        <h1>
          No tasks remaining!
        </h1>
      )}
    </>
  )
}

export default Header