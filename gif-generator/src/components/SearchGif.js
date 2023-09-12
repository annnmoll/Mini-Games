import React, { useContext, useState } from 'react'
import './SearchGif.css'
import { AppContext } from '../context.js/AppContext';
import Loading from './Loading';
function SearchGif() {
     const {searchedGif , searchedGifGenerator , searchLoading} = useContext(AppContext) ; 
    const [tag , setTag] = useState('') ;
    const changeHandler =(e)=>{
        setTag(e.target.value) ;
            console.log(tag) ;

    }
  return (
    <div className='searchGif__container'>
      
       
        <h2 className='title'> Search for a Gif</h2>
        <div className='gif'>{ searchLoading ?<Loading/>  : <img src={searchedGif} alt=''></img> }</div>
        <input type='text' placeholder='Search for a Gif' onChange={changeHandler}  value={tag} className='input'></input>
        <button onClick={()=> {searchedGifGenerator(tag) ; }} className='generate'> Generate</button>
        {console.log(searchedGif)} 

    </div>
  )
}

export default SearchGif ;