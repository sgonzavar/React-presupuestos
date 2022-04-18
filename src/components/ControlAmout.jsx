import React from 'react'

const ControlAmout = ({amount, remaining}) => {

  const currency = { style: 'currency', currency: 'USD' };
  const formatSpend = new Intl.NumberFormat('en-US', currency);

  return (
    <>
      <div className="alert alert-primary">
        Presupuesto : {amount}
      </div>
      <div className="alert">
        Restante : {formatSpend.format(remaining)}
      </div>
    </>
  )
}

export default ControlAmout