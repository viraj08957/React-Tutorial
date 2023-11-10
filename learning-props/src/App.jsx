import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'


let products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,

    price: 12
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,

    price: 10
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,

    price: 15
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,

    price: 20
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,

    price: 14
  }
]

function App() {
  return (
    <div>
      <Product id={products[0].pID} name={products[0].pName} description={products[0].desc} cost={products[0].price}></Product>
      <Product id={products[1].pID} name={products[1].pName} description={products[1].desc} cost={products[1].price}></Product>
      <Product id={products[2].pID} name={products[2].pName} description={products[2].desc} cost={products[2].price}></Product>
      <Product id={products[3].pID} name={products[3].pName} description={products[3].desc} cost={products[3].price}></Product>
    </div >

  )
}

export default App