import React from 'react'

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
          <select id='park-choice'>
            <option value='' selected disabled hidden>
              Where is the magic today:
            </option>
            <option value='magic-kingdom'>Magic Kingdom</option>
            <option value='epcot'>Epcot</option>
            <option value='hollywod-studios'>Hollywood Studios</option>
            <option value='animal-kingdom'>Animal Kingdom</option>
          </select>
        </div>
        <div className='day-tasks'>
          <p>holding text</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard
