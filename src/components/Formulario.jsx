import React from 'react'
import { useState } from 'react'
import EntradaDatos from './EntradaDatos'
import SalidaDatos from './SalidaDatos'

const Formulario = () => {

    const [amount, setAmount] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [people, setPeople] = useState(0);

    return (
        <form className='formulario contenedor'>
            <EntradaDatos

            />
            <SalidaDatos
                people={people}
                tipAmount={tipAmount}
                amount={amount}
                percentage={percentage}

            />
        </form>

    )
}

export default Formulario
