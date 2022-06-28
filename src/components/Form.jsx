import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Form = ({saveSpend, saveCreateSpend}) => {

  const [name, setName] = useState('');
  const [spend, setSpend] = useState(0);
  const [error, setError] = useState(false)

  //agregar gasto a app
  const addSpend = (event) => {
    event.preventDefault();

    //validate
    if(spend < 1|| isNaN(spend) || name.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    const spendData = {
      name,
      spend,
      id: shortid.generate()
    }
    
    //envio de arreglo con data a funtion del app
    // console.log("spendData", spendData);
    saveSpend(spendData);
    saveCreateSpend(true);

    //formateo de campos del form
    setName('');
    setSpend(0);
  }

  return (
    <form onSubmit={addSpend}>
        <h2>Agregar Tus Gastos Aqui</h2>

        {error ? <Error message={"Ambos Campos Son Obligatorios o Presupuesto Es Incorrecto"} /> : null}

        <div className="campo">
            <label>Nombre Gasto</label>
            <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="campo">
            <label>Cantidad Gasto</label>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value={spend}
                onChange={e => setSpend(parseInt(e.target.value, 10))}
            />
        </div>

        <input 
            type="submit" 
            value="agregar gasto"
            className="button-primary u-full-width"  
        />
    </form>
  )
}

Form.propTypes = {
  saveSpend: PropTypes.func.isRequired,
  saveCreateSpend: PropTypes.func.isRequired
}

export default Form