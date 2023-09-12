import React, { useContext, useState } from 'react' ;
import './Home.css'
import { AppContext } from '../context/AppContext';
import { useNavigate } from "react-router-dom";
import Loading  from './Loading';


function Home() {
    const {getWeather , data , currentLoc , setCity , city  , loading} = useContext(AppContext) ; 
    const navigate = useNavigate() ; 

    if(loading) {
        return <Loading />
      }  
      else {
        return ( 
           <div className='container'>
            <div className='title'> Weather App</div>
        
            <div className='home__body'>
            <form onSubmit={()=> {getWeather( city) ; navigate('/weather') }}>
            <input className='home__search' placeholder='Search for a city ' onChange={(e)=> {setCity(e.target.value); console.log(city)  } } onSubmit={ ()=>{} } ></input>
            <button type='submit' className='submit'>Submit</button>
            </form>
            <div className='home__hr'></div>
        
             <button className='btn' onClick={ ()=> {getWeather(currentLoc.lat , currentLoc.lng) ; navigate('/weather') }}>Get Device Location</button>
             {console.log(data)}
             </div>
        </div>)
            
          
      }
   
  
}

export default Home