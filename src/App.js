import React, { Component } from 'react';
import './App.css';
import Scorebar from './components/Scorebar/Scorebar.js';
import TitleBlock from './components/TitleBlock/TitleBlock.js'
import GamePiece from './components/GamePiece/GamePiece.js'

// push urls into an array if the url is in the array return flase

const gamePieceArray = [
  {
    callback: () => {
      if (this.beenClicked === false) {
        // adds one point if clicked picture hasnt been clicked b4
        this.setState((state, props) => ({
          currentScore: state.currentScore + 1
        }));
        this.setState({ lastGuess: true })
      }
      else {
        this.setState({
          currentScore: 0,
          lastGuess: false
        })
      }
    },
    url: '',
    imgName: 'Placeholder',
    beenClicked: false
  },
  {
    url: '',
    imgName: 'Placeholder',
    beenClicked: false
  }
]

class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    lastGuess: "",
    gamePieceArray: gamePieceArray
  };

  // callback = (data) => {

  //   if (data === false) {
  //     // adds one point if clicked picture hasnt been clicked b4
  //     this.setState((state, props) => ({
  //       currentScore: state.currentScore + 1
  //     }));
  //     this.setState({ lastGuess: true })
  //   }
  //   else {
  //     this.setState({
  //       currentScore: 0,
  //       lastGuess: false
  //     })
  //   }
  // }

  scoreCheck = () => {
    if (this.state.currentScore >= this.state.topScore) {
      console.log('top score ')
      this.setState({
        topScore: this.state.currentScore
      })
    }
  }

  // randomize = () => {
  // const pieces = document.getElementsByClassName('piece')
  // const pieces = $('.piece')

  // for (let i = 0; i < pieces.length; i++) {
  //   var target = Math.floor(Math.random() * pieces.length - 1) + 1;
  //   var target2 = Math.floor(Math.random() * pieces.length - 1) + 1;
  //   pieces.eq(target).before(pieces.eq(target2));
  // }

  // }

  checkReset = () => {
    if (this.state.object.beenClicked) {
      if (!this.props.lastGuess) {
        this.setState({ beenClicked: this.props.lastGuess })
      }
    }
  }

  componentDidUpdate() {
    this.checkReset()
  }

  handleClick = (event) => {
    console.log(event)
    
  }
  handleClickEvent = (event) => {
    event.preventDefault();
    if (this.state.beenClicked === false) {
      this.props.callback(this.state.beenClicked)
      this.setState({ beenClicked: true })
    }
    else {
      this.props.callback(this.state.beenClicked)
    }
  }



  render() {
    return (
      <div className="App">
        <Scorebar lastGuess={this.state.lastGuess} currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <TitleBlock />
        <div className='gameHolder'>
          {this.state.gamePieceArray.map((piece, index) => {
            return <GamePiece key={index} index = {index} data-object= {piece} data-index={index} onClick={this.handleClick} callback={piece.callback} url={piece.url} imgName={"Placeholder"} beenClicked={piece.beenClicked} />
          })}
        </div>
      </div>
    );
  }
}

export default App;