// Keeps track of our Todo state through a form
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  })

  const handleTaskInputChange = e => {
    setTodo({ ...todo, task: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() })
      setTodo({ ...todo, task: '' })
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        placeholder="Hit enter to validate"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Add task</button>
    </form>
  )
}

export default TodoForm
