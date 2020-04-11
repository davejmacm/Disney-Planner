import React from 'react'

function ParkDropdown(park) {
  const [parks] = React.useState([
    { label: "Where's the magic today", value: '' },
    { label: 'Magic Kingdom', value: 'Magic Kingdom' },
    { label: 'Epcot', value: 'Epcot' },
    { label: 'Hollywood Studios', value: 'Hollywood Studios' },
    { label: 'Animal Kingdom', value: 'Animal Kingdom' },
  ])
  //   React.useEffect(() => {
  //       setPark()
  //   })
  const [value, setValue] = React.useState(park.park)
  return (
    <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      {parks.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default ParkDropdown
