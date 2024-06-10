// import { useState } from "react"



export default function GameBoard({ onSelectSquare, board }) {

    /*  const [gameBoard, setGameBoard] = useState(initialGameBoard);
 
     function handleSelectSquare(rowIndex, colIndex) {
         setGameBoard((preveGameBoard) => {
             const updateBoard = [...preveGameBoard.map(innerArray => [...innerArray])];
             updateBoard[rowIndex][colIndex] = activePlayerSymbol;
             return updateBoard;
         })
 
         onSelectSquare();
     } -----() => handleSelectSquare(rowIndex, colIndex)------ */

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>))
            }
        </ol>
    )
}