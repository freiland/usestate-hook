// USE EFFFECT

import React, { useEffect, useState } from 'react';

export default function AppTwo () {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  console.log('render')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))}, [resourceType])
  

  return (
    <React.Fragment>
      <div className='test'>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}

    </React.Fragment>
  )

}