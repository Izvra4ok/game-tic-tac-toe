import React from 'react';

import "./Square.css";

const Square = ({value, handleClickSquare}) => {

    return (
        <div>
            <button className="square" onClick={handleClickSquare}>{value}</button>
        </div>
    );
};

export default Square;