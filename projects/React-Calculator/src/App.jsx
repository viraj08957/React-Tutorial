

import styles from './App.module.css'
import Display from './components/Display'
import { Button } from 'bootstrap'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (

    <center>

      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>


      </div>

    </center>

  )
}

export default App
