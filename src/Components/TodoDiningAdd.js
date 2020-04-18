import React, { useState } from 'react'
import { db } from '../Config/fire'

const TodoDiningAdd = (date) => {
  const [restaurant, setRestaurant] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    db.collection('days')
      .doc(date.date)
      .collection('dining')
      .add({ restaurant })
      .then(() => {
        setRestaurant('')
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <h5>Dining:</h5>
      <div>
        <input
          type='text'
          placeholder='Eating at...'
          value={restaurant}
          onChange={(e) => setRestaurant(e.currentTarget.value)}
        />
        <button>+</button>
      </div>
    </form>
  )
}

export default TodoDiningAdd
