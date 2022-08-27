import {useState} from 'react'

const EntradaDatos = ({setAmount, setPercentage, setPeople}) => {

    function handleAmout(e) {
        const valor = Number(e.target.value);
        setAmount(valor);
    }

    function handlePeople(e) {
        setPeople(Number(e.target.value));
    }

    function handlePorcentaje(e) {
        setPercentage(Number(e.target.value));
    }

    return (
        <div className='entrada-datos'>
            <label htmlFor="bill">Bill</label>
                <input min={1} max={99999} onChange={handleAmout} id='amount' type="number" placeholder='0' name='bill'/>

                <label htmlFor="">Select Tip %</label>

                <div className='propinas'>
                    <input type="button" id='' className='porcentaje' value='5%'/>
                    <input type="button" id='' className='porcentaje' value='10%'/>
                    <input type="button" id='' className='porcentaje' value='15%'/>
                    <input type="button" id='' className='porcentaje' value='25%'/>
                    <input type="button" id='' className='porcentaje' value='50%'/>
                    <input onChange={handlePorcentaje} id='' type="number" className='personalizado' placeholder='Custom'/>
                </div>

                <label htmlFor="">Number of people</label>
                <input onChange={handlePeople} type="number" className='' placeholder='0'/>
        </div>
    )
}

export default EntradaDatos
