import React from 'react'
import Spend from './Spend'

const ListSpend = ({spend}) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {spend.map(item => (
        <Spend 
          spend={item}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default ListSpend