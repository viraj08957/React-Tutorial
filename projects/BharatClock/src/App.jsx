import { useState } from 'react'

import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
