import React, { useState, useEffect } from 'react'
import { db } from '../Config/fire'

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
        <div className='dining-item'>
          {dining.restaurant}
          <button
            onClick={() => deleteRestaurant(date.date, dining.id)}
          ></button>
        </div>
      ))}
    </div>
  )
}

export default TodoDiningList
