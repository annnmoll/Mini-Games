import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import './Weather.css'

function Weather() {
  const { data , loading , currentLoc  , getWeather } = useContext(AppContext);
  
  useEffect(()=>{getWeather() }, [currentLoc]) ;

  const navigate = useNavigate() ;
  if(loading) {
    return <Loading />
  }  
  else {
   
      return (
        <div className='container'>
          <div className='title'><img src='https://cdn-icons-png.flaticon.com/512/122/122637.png' onClick={()=>navigate(-1)}></img>Weather</div>
          <div className='weather__body'>
            <div className='weather__region'>{`${data?.location.name} , ${data?.location.region}`}   </div>
            <img src={data?.current.condition.icon} className='weather__icon'></img>
            
            <p className='weather__temp'>{data?.current.temp_c} °C</p>
            <div>{data?.current.condition.text}</div>
            <div className='weather__bottom'>
              <div>Feels like {data?.current.feelslike_c} °C</div>
              <div> Humidity {data?.current.humidity}</div>
            </div>
            
          </div>
         
        </div>
      )       
      
  }
 
}

export default Weather;