import React from 'react'
import Square from './square'
import '../App.css';

function Board({xIsNext,squares,onPlay}) {
  
    const handleClick = (i)=>{
      if(calculateWinner(squares) || squares[i]){
        return
      }
      const nextSquares = squares.slice();
      if(xIsNext){
        nextSquares[i] = 'X';
      }
      else{
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }

    // calculate Winner Function
    const calculateWinner = (squares)=>{
      let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
      ];

      for(let i =0; i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };

    let winner = calculateWinner(squares);
    let status;
    if(winner){
      status = "Winner is" + winner;
    }
    else{
      status = "Next Player is " + (xIsNext? "X": "O");
    }


  return (
    <><div><h1>{status}</h1></div><div className='board'>
      <div className=''>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className=''>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className=''>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div></>
  )
}

export default Board
