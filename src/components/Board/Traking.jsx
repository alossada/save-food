import React from 'react'
import { useState } from 'react';
import { createTracking } from '../../firebase/firestore'


export default function Traking() {
  
  const [record, setRecord] = useState();
  
  const saveRecord = (hola) => {
    console.log(hola)
    console.log(setRecord)
    createTracking(record)
  }

  return (
  <div>
    <input type='text' onChange={e => setRecord(e.target.value)}></input>
    <button onClick={saveRecord}>Save</button>
  </div>
  )
}