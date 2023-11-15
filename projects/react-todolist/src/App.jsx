import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import TodoList from './todolist'

function App() {

  const [inputlist, setinputlist] = useState("buy apple");
  const [items, setitems] = useState([]);
  const itemEvent = (event) => {
    setinputlist(event.target.value)
  };
  const listofitems = () => {
    setitems((olditems) => {
      return [...olditems, inputlist]
    });
    setinputlist("");
  }

  const deleteitems = () => {
    console.log('deleted')
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='enter your task' onChange={itemEvent} />
          <button onClick={listofitems}> + </button>


          <ol>
            {/* <li>{inputlist}</li> */
              items.map((itemvalue,index) => {
                return <TodoList  key={index} id={index} onSelect={deleteitems} text={itemvalue}></TodoList>
              })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
