import React from 'react'
import DisneyTimer from './DisneyTimer'
import DiningTimer from './DiningTimer'
import FPTimer from './FPTimer'

const TimerBox = () => {
  return (
    <div className='timer-box'>
      <div className='primary-timer'>
        <DisneyTimer />
      </div>
      <div className='secondary-timers'>
        <DiningTimer />
        <FPTimer />
      </div>
    </div>
  )
}

export default TimerBox
