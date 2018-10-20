import React from 'react';
import './GamePiece.css';

const GamePiece = (props) => {
    return (
        <div className='piece container-fluid' onClick={() =>{ props.onClick(props.index)}}>
            <img src={props.url} alt={props.imgName} height="200" width="200" />
        </div>
    )
}

export default GamePiece;