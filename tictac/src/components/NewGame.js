import React from 'react'
import './NewGame.css'
function NewGame({init}) {
  return (
    <div className='newGame__container' onClick={init}> New Game </div>
  )
}

export default NewGame