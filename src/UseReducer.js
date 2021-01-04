import React, { useSate, useState, useReducer } from 'react';
//  USE REDUCER

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer (state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function AppSix () {
  
  
  const [state, dispatch] = useReducer(reducer, { count:0 } )

  function increment () {
    dispatch({ type: 'increment'})
  }
  function decrement () {
    dispatch({ type: 'decrement'})
  }

  
  return (
  
    <React.Fragment>
    <button onClick={decrement}>-</button>
  <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </React.Fragment>
    
  
  )
}

export default AppSix;