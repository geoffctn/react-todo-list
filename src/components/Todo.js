// Render a todo object and handles its actions
import React from 'react'

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id)
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id)
  }

  return (
    <li>
      <div className="task">
        <label>
          <input
            name="validation"
            type="checkbox"
            onClick={handleCheckboxClick}
          />
          <span class="checkmark"></span>
        </label>

        <span className={todo.completed ? 'validated' : null}>{todo.task}</span>
      </div>

      <button className="btn-delete" onClick={handleRemoveClick}>
        <span role="img" aria-label="Cross Mark">
          ❌
        </span>{' '}
      </button>
    </li>
  )
}

export default Todo
