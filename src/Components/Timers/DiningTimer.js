import React from 'react'

const today = new Date()
today.setHours(0)
const disneyDate = new Date('2020/10/23')
disneyDate.setDate(disneyDate.getDate() - 180)
const firstDiningDateDiff = Math.round(
  (disneyDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
)

const secondDiningDate = firstDiningDateDiff + 1

const getFirstDate =
  firstDiningDateDiff > 0 ? `in ${firstDiningDateDiff} days` : 'Today'
const getSecondDate =
  secondDiningDate > 0 ? `in ${secondDiningDate} days` : 'Today'

const DiningTimer = () => {
  return (
    <div className='dining-timer'>
      <h3>Dining </h3>
      <h5>
        Reservations for the first 10 days can be made{' '}
        <span>{getFirstDate}</span>{' '}
      </h5>
      <h5>
        Remaining reservations start <span>{getSecondDate}</span>
      </h5>
    </div>
  )
}

export default DiningTimer
