import React, {useState} from 'react'
import Error from './Error'

const QuestionBudget = ({ setAmount, setRemaining, setShowQ }) => {

    //Define state
    const [amounts, setAmounts] = useState(0);
    const [error, setError] = useState(false);


    //Leer valor y ponerlo en el state
    const defineBudget = (e) => {
        // console.log(parseFloat(e.target.value))
        setAmounts(parseInt(e.target.value, 10));
    }

    //Enviar presupuesto
    const addBudget = (e) => {
        e.preventDefault();

        if(amounts < 1 || isNaN(amounts)) {
            setError(true);
            return;
        }
        setError(false);

        setAmount(amounts);
        setRemaining(amounts);
        setShowQ(false);
    }
    
  return (
    <>
       <h2>Coloca Tu Presupuesto</h2>

       {error ? <Error message={"El Presupuesto Es Incorrecto"} /> : null}
       <form onSubmit={addBudget}>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca Tu Presupuesto"
                onChange={defineBudget} 
            />
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
       </form>
    </>
  )
}

export default QuestionBudget