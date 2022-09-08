import React from 'react'
import { useState, useEffect } from 'react'

import EntradaDatos from './EntradaDatos'
import SalidaDatos from './SalidaDatos'

import { reseteaSeleccion, reseteaFormulario } from '../helpers/app'

const Formulario = () => {

    const [amount, setAmount] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [people, setPeople] = useState(0);

    const [tipIndividial, setTipIndividial] = useState(0);
    const [tipTotal, setTipTotal] = useState(0);

    const [error, setError] = useState([]);

    const [reset, setReset] = useState(false)

    useEffect(() => {
        if (reset) {
            setError([])
            reseteaSeleccion()

            setAmount(0)
            setPercentage(0)
            setPeople(0)
            setTipIndividial(0)
            setTipTotal(0)
            reseteaFormulario()


            setReset(false)
        }

    }, [reset])


    return (
        <form id={'form'} className='formulario contenedor'>
            <EntradaDatos
                setAmount={setAmount}
                setPercentage={setPercentage}
                setPeople={setPeople}

                error={error}
                setError={setError}
            />
            <SalidaDatos
                people={people}
                amount={amount}
                percentage={percentage}

                tipIndividial={tipIndividial}
                tipTotal={tipTotal}

                setTipIndividial={setTipIndividial}
                setTipTotal={setTipTotal}
                setReset={setReset}
            />
        </form>

    )
}

export default Formulario
