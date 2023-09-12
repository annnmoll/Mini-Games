import './App.css';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Range from './components/Range';
import PassGen from './components/PassGen';


function App() {
  const {index , setIndex} = useContext(AppContext) ;
  return (
    <div className="App">
     <PassGen />
    </div>
  );
}

export default App;
