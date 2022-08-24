import React from 'react'

const EntradaDatos = () => {
    return (
        <div>
            <label htmlFor="">Bill</label>
                <input id='amount' type="text" />

                <label htmlFor="">Select Tip %</label>

                <div className='propinas'>
                    <button id='' className='porcentaje'>5%</button>
                    <button id='' className='porcentaje'>10%</button>
                    <button id='' className='porcentaje'>15%</button>
                    <button id='' className='porcentaje'>25%</button>
                    <button id='' className='porcentaje'>50%</button>
                    <input type="number" className='personalizado' placeholder='Custom'/>
                </div>

                <label htmlFor="">Number of people</label>
                <input type="number" className='' placeholder='Custom'/>
        </div>
    )
}

export default EntradaDatos
