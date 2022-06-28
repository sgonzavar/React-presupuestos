import React, { useState, useEffect } from 'react';
import QuestionBudget from './components/QuestionBudget';
import Form from './components/Form';
import ListSpend from './components/ListSpend';
import ControlAmout from './components/ControlAmout';

const App = () => {

  //Definir state
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [spends, saveSpends] = useState([]);
  const [spend, saveSpend] = useState({});
  const [createSpend, saveCreateSpend] = useState(false);

  //useEffect
  useEffect(() => {
    if(createSpend) {
      saveSpends([
        ...spends,
        spend
      ]);

      const ppRemaining = remaining - spend.spend;
      setRemaining(ppRemaining);

      saveCreateSpend(false);
    }
  }, [spend, createSpend, spends, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Gastos Semanales</h1>

        <div className="contenido-principal contenido">

          {showQuestion ? (<QuestionBudget
            setBudget={setBudget}
            setRemaining={setRemaining}
            updateQuestion={updateQuestion}

          />) : 
          (<div className="row">
          <div className="one-half column">
            <Form 
              saveSpend={saveSpend}
              saveCreateSpend={saveCreateSpend}
            />
            </div>
            <div className="one-half column">
              <ListSpend 
                spends={spends}
              />
              <ControlAmout 
                budget={budget}
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