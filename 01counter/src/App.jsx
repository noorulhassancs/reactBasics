import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0)

const addValue = () => {
  setCounter(counter + 1)
}

const removeValue = () => {
  if(counter > 0){
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>React Basic Counter: {counter}</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
