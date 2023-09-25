import { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NewTodoForm } from './newTodoForm'
import './styles.css'
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))

  }, [todos])

  function addTodos(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { 
          id: uuidv4(),
          title, 
          completed:false
        },
        ]
    })
  }


  

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // todo.completed = completed
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }

  console.log(todos)
  return (
    <> 
      <NewTodoForm addTodo={addTodos}/>
      
      <h1 className="header">Todo List</h1>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </> //fragment
  )
}

export default App
