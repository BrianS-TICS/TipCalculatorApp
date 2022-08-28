import { useState } from 'react'

const EntradaDatos = ({ setAmount, setPercentage, setPeople }) => {

    const [error, setError] = useState([]);

    function handleAmout(e) {
        const valor = Number(e.target.value)

        /* Si no existe un error (false) entonces se asigna el valor*/
        if (valor <= 0) {
            if (!Object.values(error).includes('Amout')) {
                setError([...error, 'Amout'])
            }
        }
        else {
            if (error.length > 0) {
                setError(error.filter(error => error !== 'Amout'))
            }
            setAmount(valor)
        }
    }

    function handlePeople(e) {
        const valor = Number(e.target.value)
        if (valor <= 0) {
            if (!Object.values(error).includes('People')) {
                setError([...error, 'People'])
            }
        }
        else {
            if (error.length > 0) {
                setError(error.filter(error => error !== 'People'))
            }
            setPeople(valor)
        }
    }

    function handlePorcentaje(e) {
        const valor = Number(e.target.value)
        if (valor <= 0) {
            if (!Object.values(error).includes('Porcentaje')) {
                setError([...error, 'Porcentaje'])
            }
        }
        else {
            if (error.length > 0) {
                setError(error.filter(error => error !== 'Porcentaje'))
            }
            setPercentage(valor)
        }
    }

    return (
        <div className='entrada-datos'>
            <label htmlFor="bill">Bill</label>
            <input onChange={handleAmout} className={Object.values(error).includes('Amout') ? 'inputError' : ''} id='amount' type="number" placeholder='0' name='bill' />

            <label htmlFor="">Select Tip %</label>

            <div className='propinas'>
                <input type="button" id='' className='porcentaje' value='5%' />
                <input type="button" id='' className='porcentaje' value='10%' />
                <input type="button" id='' className='porcentaje' value='15%' />
                <input type="button" id='' className='porcentaje' value='25%' />
                <input type="button" id='' className='porcentaje' value='50%' />
                <input onChange={handlePorcentaje} id='' type="number" className={Object.values(error).includes('Porcentaje') ? 'personalizado inputError' : 'personalizado'} placeholder='Custom' />
            </div>

            <label htmlFor="">Number of people</label>
            <input onChange={handlePeople} type="number" className={Object.values(error).includes('People') ? 'inputError' : ''} placeholder='0' />
        </div>
    )
}

export default EntradaDatos
