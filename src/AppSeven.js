// use reducer with more complex state to do application

import React, { useSate, useState, useReducer } from 'react';
import Todo from './Todo.js'
//  USE REDUCER

const ACTIONS = {
  
  ADD_TODO: 'add-todo'
}

function reducer (todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO: 
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete }
        } 
        return todo
      })

  } 
}

function newTodo (name) {
  return { id: Date.now(), name: name, complete: false }
}

function AppSeven () {
  
  
  const [todos, dispatch] = useReducer(reducer, [] )
  const [name, setName ] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    dispatch( {type: ACTIONS.ADD_TODO, payload: { name: name }  })
    setName('')
  }


  
  return (
  
    <React.Fragment>
      <form>
        <input type='text' value = {name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo.name} dispatch={dispatch}/>



      } 
        
        )}
    </React.Fragment>
    
  
  )
}

export default AppSeven;