import React, { useContext } from 'react'
import { AppContext } from '../context.js/AppContext'
import './RandomGif.css'
import Loading from './Loading';

function RandomGif() {

    const {randomGifUrl , randomGifGenerator , randomLoading} = useContext(AppContext) ;
  return (
    <div className='randomGif__container'>
         <h2 className='title'>Random Gif(s)</h2>
         <div className='gif'>{ randomLoading ? <Loading /> : <img src={randomGifUrl} alt=''></img>  }</div>
    
         <button onClick={randomGifGenerator} className='generate'>Generate</button>
    </div>
  )
}

export default RandomGif