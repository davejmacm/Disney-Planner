import React, { useState, useEffect } from 'react'
import { db } from '../Config/fire'

function useFastpass(doc) {
  const [fastpass, setFastpass] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection('days')
      .doc(doc)
      .collection('fastpass')
      .onSnapshot((snapshot) => {
        const newFastpass = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setFastpass(newFastpass)
      })
    return () => unsubscribe()
  }, [doc])

  return fastpass
}

const deleteRide = (doc, id) => {
  db.collection('days').doc(doc).collection('fastpass').doc(id).delete()
}

const TodoFastpassList = (date) => {
  const fastpass = useFastpass(date.date)

  return (
    <div className='dining-list'>
      {fastpass.map((fastpass) => (
        <div key={fastpass.id} className='dining-item'>
          <p>{fastpass.ride}</p>
          <button
            className='todo-delete'
            onClick={() => deleteRide(date.date, fastpass.id)}
          ></button>
        </div>
      ))}
    </div>
  )
}

export default TodoFastpassList
