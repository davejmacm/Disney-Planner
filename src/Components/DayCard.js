import React from 'react'
import ParkDropdown from './ParkDropdown'

const DayCard = (plan) => {
  if (!plan) return null

  return (
    <div className='day-card'>
      <div className='day-date'>
        <h2>{plan.date}</h2>
      </div>
      <div className='day-details'>
        <div className='day-day'>
          <p>{plan.day}</p>
          <ParkDropdown park={plan.park} />
        </div>
        <div className='day-tasks'>
          <p>holding text{plan.park}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard
