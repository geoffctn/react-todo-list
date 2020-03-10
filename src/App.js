import React, { useState, useEffect } from 'react'

import TodoDisplay from './components/TodoDisplay'
import TodoForm from './components/TodoForm'
import Footer from './components/Footer'

import './App.css'

// To do :
// -> Button to delete the task

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([todo, ...todos])
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  return (
    <div className="App">
      <div className="App-inner">
        <h1>React To Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoDisplay
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
