import React from "react";
import './TitleBlock.css'
const TitleBlock = () => {

    return(
        <div className = "title">
            <h1>Matching Game</h1>
            <h3>How to Play:</h3>
            <p>
                Click a picture to earn points. But dont click the same picture twice or you will lose.
            </p>
        </div>
    )
}

export default TitleBlock;