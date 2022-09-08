import React from 'react'
import { useEffect } from 'react'

const SalidaDatos = ({ people, amount, percentage, setTipIndividial, tipIndividial, setTipTotal, tipTotal, setReset}) => {

    const consulta = [
        amount,
        people,
        percentage
    ]

    useEffect(() => {
        if (!Object.values(consulta).includes(0)) {
            const calcularTotal = (percentage * amount / 100).toFixed(2);
            const calcularIndividual = ((percentage * amount / 100) / people).toFixed(2);

            setTipTotal(calcularTotal);
            setTipIndividial(calcularIndividual);
        }
    }, [consulta]);

    return (
        <div className='bg-Salida'>

            <div>
                <div className='resultados'>
                    <div className='words'>
                        <h2>Tip Amount</h2>
                        <span>/ person</span>
                    </div>
                    <p>${tipIndividial}</p>
                </div>
                <div className='resultados'>
                    <div className='words'>
                        <h2>Total</h2>
                        <span>/ person</span>
                    </div>
                    <p>${tipTotal}</p>
                </div>
            </div>

            <input className='btn-reset' type="button" value="Reset" onClick={ () => { setReset(true) } } />
        </div>
    )
}

export default SalidaDatos
