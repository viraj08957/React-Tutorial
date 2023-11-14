

import styles from './App.module.css'
import Display from './components/Display'
import { Button } from 'bootstrap'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [Calval, setCalval] = useState("45");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
      setCalval("")
    }
    else if (buttonText === "=") {
      const result = eval(Calval);
      setCalval(result);
    }
    else {
      const newDisplayValue = Calval + buttonText;
      setCalval(newDisplayValue);
    }
  }


  return (

    <center>

      <div className={styles.calculator}>
        <Display displayvalue={Calval}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>


      </div>

    </center>

  )
}

export default App
