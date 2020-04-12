import React, { useEffect } from 'react'
import { db } from '../Config/fire'

function ParkDropdown(park) {
  const [parks] = React.useState([
    { label: "Where's the magic today", value: '' },
    { label: 'Magic Kingdom', value: 'Magic Kingdom' },
    { label: 'Epcot', value: 'Epcot' },
    { label: 'Hollywood Studios', value: 'Hollywood Studios' },
    { label: 'Animal Kingdom', value: 'Animal Kingdom' },
  ])

  const [value, setValue] = React.useState(park.park)

  //   const updatePark = (e) => {
  //     setValue(e.currentTarget.value)
  //   }

  useEffect(() => {
    db.collection('days').doc(park.date).update({ park: value })
  }, [park.date, value])

  return (
    <select
      className='park-dropdown'
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      //   onChange={updatePark}
    >
      {parks.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default ParkDropdown
