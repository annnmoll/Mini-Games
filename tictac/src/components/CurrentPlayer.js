import React from 'react'
import './CurrentPlayer.css'
function CurrentPlayer({currentPlayer}) {
  return (
    <div className='currentPlayer__container'>CurrentPlayer-<span>{currentPlayer}</span></div>
  )
}

export default CurrentPlayer  