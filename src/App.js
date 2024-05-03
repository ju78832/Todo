import React, { useState } from 'react'
import { TodoProvider } from './context/TodoContext';

function App() {
  const [todos, setTodos] = useState([]);
  
  // create 
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // delete 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((Todo) => Todo.id !== id))
  }
  
  // istoggle complete

  const isToggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : todo
  ))
  }

  
  return (
    <TodoProvider value = {{todos, addTodo, deleteTodo, updateTodo, isToggleComplete}}>
       <div className='min-h-screen py-8 bg-[#172842]' >
      <div className='w-full max-w-2xl px-4 py-3 shadow-md mx-auto rounded-lg text-white'>
        <h1 className='text-2xl text-center font-bold mb-5 mt-2'>Todo Management</h1>
      <div className=''> 
      </div>

      </div>
      
    </div>

    </TodoProvider>
   
  )
}

export default App
