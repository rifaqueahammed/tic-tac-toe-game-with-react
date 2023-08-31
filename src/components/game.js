import React, {  useState } from 'react'
import Board from './board'

function Game() {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares)=>{
       const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
       setHistory(nextHistory);
       setCurrentMove(nextHistory.length-1)
    }

   const jumpTo = (nextMove)=>{
     setCurrentMove(nextMove);
   };

    const moves = history.map((hist,move)=>{
        let description;
        if(move>0){
            description = 'Go to move #' + move; 
        }else{
            description = 'Go to Start';
        }
    return(
        <li key={move}><button onClick={()=>jumpTo(move)}>{description}</button></li>
    )
    })

  return (
    <div>
        <div>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
        <ol>{moves}</ol>
      </div>
      
    </div>
  )
}

export default Game
