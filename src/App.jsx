import { useState } from 'react'
import Formulario from './components/Formulario';

function App() {

  const [amount, setAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  

  return (
      <>
        <div className='titulo'>
          <h1>SPLI</h1>
          <h2>TTER</h2>
        </div>
        <Formulario/>
      </>
  )
}

export default App
