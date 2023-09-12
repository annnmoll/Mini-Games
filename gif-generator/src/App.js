import './App.css';
import { useContext } from 'react';
import { AppContext } from './context.js/AppContext';
import RandomGif from './components/RandomGif';
import SearchGif from './components/SearchGif';

function App() {
  const { gifUrl, randomGifGenerator } = useContext(AppContext)
  return (
    <div className='App'>
        <div className='app__container'>
          <RandomGif />
          <SearchGif />
        </div>
    </div>
  );
}

export default App;
