'use client'
import React from 'react'

function Events(props) {
  const onBackClickHandler = ()=>{

  }
  const onForwardClickHandler = ()=>{

  }
  console.log(props.data)
  return (
    <>
      <button type="button" onClick={onBackClickHandler}>Back</button>
    <main>
      Events
      <div>
        
      </div>
      {data}
    </main>
    <button type="button" onClick={onForwardClickHandler}>Forward</button>
    </>
  )
}

export default Events