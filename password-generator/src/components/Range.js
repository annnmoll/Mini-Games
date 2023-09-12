import React, { useContext, useState } from 'react'
import './Range.css'


import { AppContext } from '../context/AppContext';


function Range() {
   const { range , setRange} = useContext(AppContext) ;
  
  return (
    <div className='range__container' style={ {width : '100%'}}>
        <input type='range' name='length' min='3' max='10' value={range} step='1' onChange={(e)=> {e.preventDefault() ; setRange(e.target.value )}}/>
    </div>
  )
}

export default Range