import React from 'react'

const DayCard = ({ plan }) => {
  if (!plan) return null

  console.log('plan date:', plan.date)

  return (
    <div className='day-card'>
      <h2>{plan.date}</h2>
      <p>{plan.day}</p>
    </div>
  )
}

export default DayCard
