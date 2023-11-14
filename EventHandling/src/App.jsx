import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const purple = '#8ee4ad'
  cost[bg, setbg] = useState(purple);
  const bgChange = () => {

    // console.log('clicked');
    let newbg = "#34495e"
    setbg(newbg)

  };
  return (<>
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange}>Click Me</button>
    </div>
  </>
  )
}

export default App;
