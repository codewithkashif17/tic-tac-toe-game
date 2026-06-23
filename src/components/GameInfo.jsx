export default function GameInfo({ history, jumpTo }) {
    return (
        <div className="game-info">
            <h2>Game History</h2>

            <ol>
                {history.map((squares, move) => {
                    const description =
                        move > 0
                            ? `Go to move #${move}`
                            : 'Go to game start';

                    return (
                        <li key={move}>
                            <button onClick={() => jumpTo(move)}>
                                {description}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}