import React from 'react'
import ParkDropdown from './ParkDropdown'
import TodoDiningList from './TodoDiningList'
import TodoDiningAdd from './TodoDiningAdd'

const DayCard = (plan) => {
  if (!plan) return null

  const backgroundUrl = (park) => {
    var backgroundUrl
    if (park === 'Magic Kingdom') {
      backgroundUrl = 'url(/images/MKday_.jpg)'
    }
    if (park === 'Epcot') {
      backgroundUrl = 'url(/images/EP.jpg)'
    }
    if (park === 'Hollywood Studios') {
      backgroundUrl = 'url(/images/HS.jpg)'
    }
    if (park === 'Animal Kingdom') {
      backgroundUrl = 'url(/images/AK.jpg)'
    }
    if (park === 'Epcot (World Showcase)') {
      backgroundUrl = 'url(/images/EWS.jpg)'
    }
    if (park === 'Disney Springs') {
      backgroundUrl = 'url(/images/DS.jpg)'
    }
    if (park === 'Typhoon Lagoon') {
      backgroundUrl = 'url(/images/TL.jpg)'
    }
    if (park === 'Blizzard Beach') {
      backgroundUrl = 'url(/images/BB.jpg)'
    }
    return backgroundUrl
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
        <div
          className='day-tasks'
          style={{
            backgroundImage: backgroundUrl(plan.park),
          }}
        >
          <div className='magic-hours'>
            <p>Magic Hours: {plan.magicHours}</p>
          </div>
          <p>Your plans for {plan.park}:</p>
          <div className='day-todos'>
            <div className='dining-todos'>
              <TodoDiningAdd date={plan.date} />
              <TodoDiningList date={plan.date} />
            </div>
            {/* ADD: fp-todo div and components  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayCard
