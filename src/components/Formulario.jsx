import React from 'react'
import { useState } from 'react'

import EntradaDatos from './EntradaDatos'
import SalidaDatos from './SalidaDatos'

import { reseteaSeleccion } from '../helpers/app'

const Formulario = () => {

    const [amount, setAmount] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [people, setPeople] = useState(0);

    const [tipIndividial, setTipIndividial] = useState(0);
    const [tipTotal, setTipTotal] = useState(0);

    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        // Resetear formulario
        e.preventDefault();
        e.target.reset();

        setError([]);

        reseteaSeleccion();

        setAmount(0);
        setPercentage(0)
        setPeople(0)
        setTipIndividial(0)
        setTipTotal(0)
    }  

    return (
        <form onSubmit={handleSubmit} className='formulario contenedor'>
            <EntradaDatos
                setAmount = {setAmount}
                setPercentage = {setPercentage}
                setPeople = {setPeople}

                error = {error}
                setError = {setError}
            />
            <SalidaDatos
                people={people}
                amount={amount}
                percentage={percentage}

                tipIndividial = {tipIndividial}
                tipTotal = {tipTotal}

                setTipIndividial = {setTipIndividial}
                setTipTotal = {setTipTotal}
            />
        </form>

    )
}

export default Formulario
