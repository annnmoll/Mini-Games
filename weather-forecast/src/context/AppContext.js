import axios from 'axios';
import React, { createContext, useState, } from 'react'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();
const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  // params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': '0c768a5badmsha89d6aaffc3715dp155e9djsnf84344b37ede',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
function AppContextProvider({ children }) {
 
 const [data , setData] = useState(null) ;
 const [currentLoc , setCurrentLoc] = useState({})
 const [city , setCity] = useState('') ;
 const [loading , setLoading ] = useState(false ) ; 
  const getWeather = async(  )=>{
 try {

   
  setLoading(true) ; 
  if(city !== ''){options.params =  { q : city }}
  else{ options.params =  { q : currentLoc.lat +','+ currentLoc.lng }}
  const response = await axios.request(options);
	setData(response?.data) ; 
  setLoading(false) ; 
  setCity('')
} catch (error) {
	console.error(error);
}   
  }
 
 
const value = {getWeather , data ,currentLoc , setCurrentLoc  , setCity , loading }

  

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider 


