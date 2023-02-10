import React, {useState} from 'react';
import Board from "../Board/Board";
import {calculateWinner} from "../../utils/helper";
import "./Game.css";

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [step, setStep] = useState(9)
    const winner = calculateWinner(board);

    const handleClickSquare = (index) => {
        const boardCopy = [...board];
        //Определить был ли Click по ячейке или игра закончена
        if (winner || boardCopy[index]) {
            return null
        }
        //Определить чей ход X ? O
        boardCopy[index] = xIsNext ? "X" : "O";
        //Обновить state
        setBoard(boardCopy);
        setStep(step - 1)
        setXIsNext(!xIsNext);
    };

    const startGame = () => {
        setStep(9);
        setBoard(Array(9).fill(null));
        document.querySelector(".info").classList.remove("winner");
    }

    const startNewGame = () => {

        return (
            <button className="start" onClick={startGame}>Start new game</button>
        )
    };

    return (
        <div className="wrapper">

            {startNewGame()}

            <Board squares={board} handleClickSquare={handleClickSquare}/>

            <div className="info">
                {winner
                    ? `Winner: Player  ${winner}`
                    : `Player turn: ${xIsNext ? "X" : "0"}, Осталось ходов: ${step}`
                }
            </div>
        </div>
    );
};

export default Game;