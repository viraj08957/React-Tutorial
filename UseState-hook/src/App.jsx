import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setmessage] = useState('');

  let calbmi = (e) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter valid weight and height")
    }
    else {
      let bmi = (weight / (height * height) * 703);
      setbmi(bmi.toFixed(1));

      if (bmi < 25) {
        setmessage = ("you are underweight");
      }
      else if (bmi > 25 && bmi < 30) {
        setmessage = ("you are heilthier person");
      }
      else {
        setmessage = ("you are overweight");
      }
    }

  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <>
      <div className='container'>
        <h1>BMI Calculator</h1>

        <form action="" onSubmit={calbmi()}>
          <div >
            <label htmlFor="">Weight </label>
            <input type="text" placeholder='enter weight value' value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div >
            <label htmlFor="">Height </label>
            <input type="text" placeholder='enter height value' value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'> Submit </button>\
            <button className='btn btn-outline' onClick={reload} type='submit'> Reload </button>
          </div>
          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>

    </>
  )
}

export default App
