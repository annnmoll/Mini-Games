import TicTac from './components/TicTac';
import './App.css';
import CurrentPlayer from './components/CurrentPlayer';
import { useEffect, useState } from 'react';
import NewGame from './components/NewGame';

function App() {
  useEffect(()=> {init()} , [])
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const boxes = document.querySelectorAll('.Box');
  const [gameGrid, setGameGrid] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]) ;
  const [GameOver , setGameOver] = useState(false) ; 

  const init = () => {

    boxes.forEach(box => {box.innerText = ' ' ; box.classList.remove('winner') ; box.style.cssText ='cursor : pointer'});
    setCurrentPlayer(0);
    setGameGrid([-1,-1,-1,-1,-1,-1,-1,-1,-1]) ;
    setGameOver(false) ;
}

 
 
  return (
    <div className="App">
      <CurrentPlayer currentPlayer={currentPlayer} />
      <TicTac currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        boxes={boxes} 
          gameGrid ={gameGrid}
          setGameGrid = {setGameGrid}
          GameOver = {GameOver}
          setGameOver = {setGameOver}
        />
      <NewGame init = {init} />
    </div> 
  );
}
 
export default App;
 