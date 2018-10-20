import React, { Component } from 'react';
import './Scorebar.css'
class Scorebar extends Component {

    lastGuessBar = (value) =>{
        switch(value){
            case true:{
                return "Correct!"
            }
            case false:{
                return `You Lost!`
            }
            case "":{
                return "Click to make your first guess"
            }
            default:{
                return "uh-oh something went VERY wrong"
            }

        }
    }


    render() {
        return (
                <ul className='navbar navbar-dark bg-dark topbar'>
                    <li className='nav-link active'>Game</li>
                    <li className="nav-link">{this.lastGuessBar(this.props.lastGuess)}</li>
                    <li className="nav-link"> Score: {this.props.currentScore} |Top Score: {this.props.topScore}</li>
                </ul>
        )
    }
}
export default Scorebar