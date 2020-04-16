import React from 'react'

const disneyDate = new Date('2020/10/23')
const today = new Date()
today.setHours(0)
const dateDiff = Math.round(
  (disneyDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
)

const getDate = dateDiff > 0 ? dateDiff : 'Today'

const DisneyTimer = () => {
  return (
    <div>
      <h2> {getDate} days until Disney!!</h2>
    </div>
  )
}

export default DisneyTimer
