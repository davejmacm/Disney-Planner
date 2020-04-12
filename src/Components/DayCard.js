import React from 'react'
import ParkDropdown from './ParkDropdown'

const DayCard = (plan) => {
  if (!plan) return null

  const backgroundUrl =
    plan.park === 'Magic Kingdom'
      ? 'url(/images/MKday.jpg)'
      : 'url(/images/favicon-castle.jpg)'

  // function backgroundUrl() {
  //   console.log(plan.park)
  //   let backgroundUrl = 'abc'
  //   if (plan.park === 'Magic Kingdom') {
  //     backgroundUrl = 'url(/images/MKday.jpg)'
  //     console.log(backgroundUrl)
  //   }
  //   if (plan.park === 'Epcot') {
  //     backgroundUrl = 'url(/images/favicon-castle.jpg)'
  //   }
  //   if (plan.park === 'Hollywood Studios') {
  //     backgroundUrl = 'url(/images/.jpg)'
  //   }
  //   if (plan.park === 'Animal kingdom') {
  //     backgroundUrl = 'url(/images/.jpg)'
  //   }
  //   console.log(backgroundUrl)
  //   return backgroundUrl
  // }
  // console.log(backgroundUrl)

  //for updating component background depending on park

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
        <div
          className='day-tasks'
          // style={{
          //   backgroundImage: backgroundUrl,
          // }}
        >
          <p>Your plans for {plan.park}:</p>
          <h3> Coming Soon </h3>
          <div className='magic-hours'>
            <p>Magic Hours: {plan.magicHours}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayCard
