import { useState } from 'react';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import './styles/game.css';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);

    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>

      <div className="game">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />

        <GameInfo history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}