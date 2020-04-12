import React from 'react'
import ParkDropdown from './ParkDropdown'

const DayCard = (plan) => {
  if (!plan) return null

  const backgroundStyle = {
    //for updating component background depending on park
  }

  return (
    <div className='day-card'>
      <div className='day-date'>
        <h2>{plan.date}</h2>
      </div>
      <div className='day-details'>
        <div className='day-day'>
          <p>{plan.day}</p>
          <ParkDropdown park={plan.park} date={plan.date} />
        </div>
        <div className='day-tasks' style={backgroundStyle}>
          <p>holding text{plan.park}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard
