import React from 'react'
import DayCard from './DayCard'

const PlannerGrid = ({ plans }) => {
  const planNodes = plans.map((plan) => {
    return <DayCard key={plan.date} date={plan.date} day={plan.day} />
  })

  return <div className='card-grid'>{planNodes}</div>
}
export default PlannerGrid
