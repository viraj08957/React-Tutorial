import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let footitems = ['daal', 'roti', 'salad', 'milk', 'ghee']
  // let footitems = [];



  return (
    // this code is for randering using map method.
    // <React.Fragment>
    //   <h1>Healthy foot</h1>
    //   <ul className="list-group">
    //     {footitems.map((item) => (
    //       <li class='list-group-item'>{item}</li>
    //     ))}
    //   </ul>
    // </React.Fragment>

    // or you can use this alternative code 

    <>
      <h1>
        Healthy food
      </h1>
      {footitems.length == 0 ? <h3>i m hungry</h3> : null}
      <ul className='list-group'>
        {footitems.map((item) => (
          <li key={item} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
