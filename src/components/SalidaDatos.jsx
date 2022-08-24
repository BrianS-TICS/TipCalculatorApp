import React from 'react'
import { useEffect } from 'react'

const SalidaDatos = ({people,tipAmount,amount,percentage}) => {
    
    const TipIndividial = 0;
    const TipTotal = 0;

    

    useEffect(() => {
        
    },[])

    return (
        <div className='bg-Salida'>

            <div className='resultados'>
                <div className='words'>
                    <h2>Tip Amount</h2>
                    <span>/person</span>
                </div>
                <p>000</p>
            </div>

            <div className='resultados'>
                <div className='words'>
                    <h2>Total</h2>
                    <span>/person</span>
                </div>
                <p>000</p>
            </div>

            <button className='btn-reset'>Reset</button>
        </div>
    )
}

export default SalidaDatos
