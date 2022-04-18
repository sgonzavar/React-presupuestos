import React from 'react'

const Spend = ({spend}) => {

  const currency = { style: 'currency', currency: 'USD' };
  const formatSpend = new Intl.NumberFormat('en-US', currency);

  return (
    <li className="gastos">
      <p>
        {spend.name}
        <span className="gasto">{formatSpend.format(spend.spend)}</span>
      </p>
    </li>
  )
}

export default Spend