import React, { useState } from 'react'
import { db } from '../Config/fire'

const TodoFastpassAdd = (date) => {
  const [ride, setRide] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    db.collection('days')
      .doc(date.date)
      .collection('fastpass')
      .add({ ride })
      .then(() => {
        setRide('')
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <h5>
        Fastpass<sup>+</sup>:
      </h5>
      <div className='dining-add'>
        <input
          type='text'
          placeholder='Enjoying...'
          value={ride}
          onChange={(e) => setRide(e.currentTarget.value)}
          required
        />
        <button>+</button>
      </div>
    </form>
  )
}

export default TodoFastpassAdd
