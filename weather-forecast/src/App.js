import './App.css';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import {Routes , Route} from 'react-router-dom' ; 
import Weather from './components/Weather'
import Home from './components/Home';


function App() {
 const { setCurrentLoc } = useContext(AppContext);

  useEffect(() => {
    getCurr();
    
  }, [])

  const getCurr = () => {
    navigator.geolocation.getCurrentPosition((pos) => setCurrentLoc({lat : pos.coords.latitude , lng : pos.coords.longitude}));
   
   
 }

  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
