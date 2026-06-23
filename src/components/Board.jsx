import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        status = `🎉 Winner: ${winner}`;
    } else if (!squares.includes(null)) {
        status = '🤝 Match Draw';
    } else {
        status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="board-container">
            <div className="status">{status}</div>

            <div className="board">
                {squares.map((square, i) => (
                    <Square
                        key={i}
                        value={square}
                        onSquareClick={() => handleClick(i)}
                    />
                ))}
            </div>
        </div>
    );
}