import React from 'react'

function Events() {
  return (
    <>
      <button type="button" onClick={onBackClickHandler}>Back</button>
    <main>
      Events
    </main>
    <button type="button" onClick={onForwardClickHandler}></button>
    </>
  )
}

export default Events