// Display the list of todos
import React from 'react'

import Todo from './Todo'

const TodoDisplay = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="tasks-wrapper">
      <ul className="tasks">
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoDisplay
