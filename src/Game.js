import React from 'react'
import Board from './Board'

import { useState } from 'react'

export default function Game () {

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)])

  function handleClick(i) {
    const squares = history[history.length - 1].slice();
    if(squares[i] || calculateWinner(squares)){
      return;
    };

    squares[i] = xIsNext? 'X': 'O';
    setHistory(history => history.concat([squares]))
    setXIsNext(xIsNext => !xIsNext);
  }

  const squares = history[history.length - 1];
  const status = "/* status */";

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] 
      && squares[a] === squares[b]
      && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
