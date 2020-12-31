// USE REF

import React, { useSate, useState, useRef, useEffect } from 'react';


export default function AppFour ( ) {
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
    prevName.current= name
  }, [name])

  return (
    <React.Fragment>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>my name is {name}</div>
      <div>my name is {name} and it used to be {prevName.current}</div>


    </React.Fragment>
  )
}