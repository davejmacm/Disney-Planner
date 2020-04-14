import React from 'react'

const today = new Date()
const disneyDate = new Date('2020/10/23')
disneyDate.setDate(disneyDate.getDate() - 60)
const DateDiff = Math.round(
  (disneyDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
)

const getDate = DateDiff > 0 ? `in ${DateDiff} days` : 'Today'

const FPTimer = () => {
  return (
    <div className='fp-timer'>
      <h3>Fastpass +</h3>
      <h5>
        Selections can be made <span>{getDate}</span>
      </h5>
    </div>
  )
}

export default FPTimer
