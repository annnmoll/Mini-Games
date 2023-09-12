import React, { useEffect, useState } from 'react';
import './TicTac.css' ;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function TicTac({ currentPlayer, setCurrentPlayer, boxes, gameGrid, setGameGrid, GameOver, setGameOver }) {
 
     useEffect(()=>{isGameOver()} , [gameGrid])

    const isGameOver = () => {

        let isWinner = false;

        if (gameGrid[0] === gameGrid[1] && gameGrid[1] === gameGrid[2] && gameGrid[0] !== -1) {
            boxes[0].classList.add('winner');
            boxes[1].classList.add('winner');
            boxes[2].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[3] === gameGrid[4] && gameGrid[4] === gameGrid[5] && gameGrid[3] !== -1) {
            boxes[3].classList.add('winner');
            boxes[4].classList.add('winner');
            boxes[5].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[6] === gameGrid[7] && gameGrid[7] === gameGrid[8] && gameGrid[6] !== -1) {
            boxes[6].classList.add('winner');
            boxes[7].classList.add('winner');
            boxes[8].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[0] === gameGrid[3] && gameGrid[3] === gameGrid[6] && gameGrid[0] !== -1) {
            boxes[0].classList.add('winner');
            boxes[3].classList.add('winner');
            boxes[6].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[1] === gameGrid[4] && gameGrid[4] === gameGrid[7] && gameGrid[1] !== -1) {
            boxes[1].classList.add('winner');
            boxes[4].classList.add('winner');
            boxes[7].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[2] === gameGrid[5] && gameGrid[5] === gameGrid[8] && gameGrid[2] !== -1) {
            boxes[2].classList.add('winner');
            boxes[5].classList.add('winner');
            boxes[8].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[0] === gameGrid[4] && gameGrid[4] === gameGrid[8] && gameGrid[0] !== -1) {
            boxes[0].classList.add('winner');
            boxes[4].classList.add('winner');
            boxes[8].classList.add('winner');
            isWinner = true;
        }
        else if (gameGrid[2] === gameGrid[4] && gameGrid[4] === gameGrid[6] && gameGrid[2] !== -1) {
            boxes[2].classList.add('winner');
            boxes[4].classList.add('winner');
            boxes[6].classList.add('winner');
            isWinner = true;
        }
        if (isWinner) { setGameOver(true); }
        return isWinner;
    }

    const switchPlayer = () => {
        if (currentPlayer === 0) setCurrentPlayer('X');
        else setCurrentPlayer(0);
    }
    const clickHandler = async (e) => {

        boxes.forEach( (box, i) => {

            if (e.target === box) {
                if (gameGrid[i] === -1) {
                    setGameGrid(prev => { const x = [...prev.slice(0, i), currentPlayer, ...prev.slice(i + 1)]; return x; });
                    e.target.innerText = currentPlayer;
                    e.target.style.cssText = 'cursor : default ';
                    switchPlayer();
                    
                } 
            }
        })
        //  isGameOver() ;

        
    }
    const fakeClickHandler = () => {
        toast.warn(' Game is already over', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    } 



    return (
        <div className='tictac__container'>
            <div className='tictac'>
                <div className='Box Box1' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box2' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box3' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box4' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box5' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box6' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box7' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box8' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <div className='Box Box9' onClick={!GameOver ? clickHandler : fakeClickHandler}></div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default TicTac