import React, { useState } from 'react';
import QuestionBudget from './components/QuestionBudget';
import Form from './components/Form';
import ListSpend from './components/ListSpend';
import ControlAmout from './components/ControlAmout';

const App = () => {

  //Definir state
  const [amout, setAmount] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQ, setShowQ] = useState(true);
  const [spend, setSpend] = useState([]);


  //cuando se agregue un gasto
  const addNewSpend = spends => {
    console.log("desde app gonorrea", spends);
    setSpend([
      ...spend,
      spends
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gastos Semanales</h1>

        <div className="contenido-principal contenido">

          {showQ ? (<QuestionBudget
            setAmount={setAmount}
            setRemaining={setRemaining}
            setShowQ={setShowQ}
          />) : 
          (<div className="row">
          <div className="one-half column">
            <Form addNewSpend={addNewSpend} />
            </div>
            <div className="one-half column">
              <ListSpend 
                spend={spend}
              />
              <ControlAmout 
                amout={amout}
                remaining={remaining}
              />
            </div>
          </div>)}

        </div>
      </header>
    </div>
  )
}

export default App