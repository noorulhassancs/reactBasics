import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {TodoProvider} from './contexts'

function App() {

   const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{todoId:Date.now(), ...todo},...prevTodo])
  }

  const updateTodo = (todoId, todo) => {
    // console.log("func params : ",todo.todoTitle);
    
    setTodos((prevTodo) => prevTodo.map((prev) => (prev.todoId === todoId ? todo : prev)))    
  }

  const removeTodo = (todoId) => {
    setTodos((prevTodo) => prevTodo.filter((prev) => (prev.todoId !== todoId )))
  }

  const toggleComplete = (todoId) => {
    setTodos((prevTodo) => prevTodo.map((prev) => prev.todoId === todoId ? {...prev, todoCompleted: !prev.todoCompleted} : prev) )
  }

    useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length > 0){
         setTodos(todos)  
      }
    },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return (
    <TodoProvider value={{todos,addTodo,removeTodo, updateTodo,toggleComplete}}>
      <div className='bg-[#172842] py-8 box-border'>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 capitalize">manage your todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add Todoitems here */}

            {/*Loop and Add TodoItem here */}
            {
            todos.map((todo) => (
              <div key={todo.todoId}
              className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))
            }

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
