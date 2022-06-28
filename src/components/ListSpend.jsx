import React from 'react'
import Spend from './Spend'
import PropTypes from 'prop-types'

const ListSpend = ({spends}) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {spends.map(item => (
        <Spend 
          key={item.id}
          spend={item}
        />
      ))}
    </div>
  )
}

ListSpend.propTypes = {
  spends: PropTypes.array.isRequired
}

export default ListSpend