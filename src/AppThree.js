// USE EFFECT EXAMPLE TWO with event listeners

import React, { useEffect, useState } from 'react';

export default function AppTwo () {
  const [resourceType, setResourceType] = useState('posts')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])



  return (
    <div>{windowWidth}</div>
  )
    }
