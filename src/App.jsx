import { useState } from 'react'
import './App.css'

import Formulario from './components/Formulario';

function App() {

  const [amount, setAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  

  return (
      <>
        <h1>SPLITTER</h1>
        <Formulario/>
      </>
  )
}

export default App
