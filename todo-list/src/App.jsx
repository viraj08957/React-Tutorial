import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddToDO from './components/AddTodo'
import ToDoitem2 from './components/ToDoItem2'
import ToDoitem1 from './components/ToDoItem1'
import './components/App.css';




function App() {
  const [count, setCount] = useState(0)
  return (
    <center class='todo-container'>

      <AppName></AppName>
      <AddToDO></AddToDO>
      <ToDoitem1></ToDoitem1>
      <ToDoitem2></ToDoitem2>


    </center>
  )

}

export default App
