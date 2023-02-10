import React from 'react';
import Square from "../Square/Square";

import "./Board.css";

const Board = ({handleClickSquare, squares}) => {


    return (
        <div className="board">
            {
                squares.map((square, index) =>
                    <Square key={index} value={square} handleClickSquare={() => handleClickSquare(index)}/>)
            }
        </div>
    );
};

export default Board;