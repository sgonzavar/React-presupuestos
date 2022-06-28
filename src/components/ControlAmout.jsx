import React from 'react'
import PropTypes from 'prop-types'
import {reviewBudget} from '../helpers'

const ControlAmout = ({budget, remaining}) => {

  const currency = { style: 'currency', currency: 'USD' };
  const formatSpend = new Intl.NumberFormat('en-US', currency);

  return (
    <>
      <div className="alert alert-primary">
        Presupuesto : {budget}
      </div>
      <div className={reviewBudget(budget, remaining)}>
        Restante : {formatSpend.format(remaining)}
      </div>
    </>
  )
}

ControlAmout.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}

export default ControlAmout