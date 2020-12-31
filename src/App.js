import React, { useSate, useState } from 'react';
//  USE STATE

function App () {
  
  const [currentState, updateState] = useState(5)

  function decrementCount () {
    updateState(prevCount => prevCount - 1)
  }

  function incrementCount () {
    updateState(prevCount => prevCount + 1)
  }
  return (
  
    <React.Fragment>
    <button onClick={decrementCount}>-</button>
  <span>{currentState}</span>
    <button onClick={incrementCount}>+</button>
    </React.Fragment>
    
  
  )
}

export default App;