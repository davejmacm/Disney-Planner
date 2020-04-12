import React from 'react'
import DayCard from './DayCard'

const PlannerGrid = ({ plans }) => {
  const planNodes = plans.map((plan) => {
    return (
      <DayCard
        key={plan.date}
        date={plan.date}
        day={plan.day}
        park={plan.park}
        magicHours={plan.magicHours}
        handleParkChange={plan.handleParkChange} //might just be handlePC
      />
    )
  })

  return <div className='card-grid'>{planNodes}</div>
}
export default PlannerGrid
