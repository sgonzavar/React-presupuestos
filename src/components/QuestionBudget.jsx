import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'


const QuestionBudget = ({ setBudget, setRemaining, updateQuestion }) => {

    //Define state
    // const [amounts, setAmounts] = useState(0);
    const [cost, setCost] = useState(0);
    const [error, setError] = useState(false);


    //Leer valor y ponerlo en el state
    const defineBudget = (e) => {
        // console.log(parseFloat(e.target.value))
        setCost(parseInt(e.target.value, 10));
    }

    //Enviar presupuesto
    const addBudget = (e) => {
        e.preventDefault();

        if(cost < 1 || isNaN(cost)) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(cost);
        setRemaining(cost);
        updateQuestion(false);
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

QuestionBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}

export default QuestionBudget