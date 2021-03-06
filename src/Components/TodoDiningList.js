import React, { useState, useEffect } from 'react'
import { db } from '../Config/fire'
import DiningTimer from './Timers/DiningTimer'

function useDining(doc) {
  const [dining, setDining] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection('days')
      .doc(doc)
      .collection('dining')
      .onSnapshot((snapshot) => {
        const newDining = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setDining(newDining)
      })
    return () => unsubscribe()
  }, [doc])

  return dining
}

const deleteRestaurant = (doc, id) => {
  db.collection('days').doc(doc).collection('dining').doc(id).delete()
}

const TodoDiningList = (date) => {
  const dining = useDining(date.date)

  return (
    <div className='dining-list'>
      {dining.map((dining) => (
        <div key={dining.id} className='dining-item'>
          <p>{dining.restaurant}</p>
          <button
            className='todo-delete'
            onClick={() => deleteRestaurant(date.date, dining.id)}
          ></button>
        </div>
      ))}
    </div>
  )
}

export default TodoDiningList
