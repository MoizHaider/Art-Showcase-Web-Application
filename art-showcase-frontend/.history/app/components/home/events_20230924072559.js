'use client'
import React from 'react'

function Events(props) {
  const onBackClickHandler = ()=>{

  }
  const onForwardClickHandler = ()=>{

  }
  const base64Image = Buffer.from(fileContents).toString('base64');
  return (
    <>
      <button type="button" onClick={onBackClickHandler}>Back</button>
    <main>
      Events

    </main>
    <button type="button" onClick={onForwardClickHandler}>Forward</button>
    </>
  )
}

export default Events