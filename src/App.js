import React, { Component } from 'react';
import './App.css';
import Scorebar from './components/Scorebar/Scorebar.js';
import TitleBlock from './components/TitleBlock/TitleBlock.js'
import GamePiece from './components/GamePiece/GamePiece.js'
import Winner from './components/Winner/Winner.js'
import Loser from './components/Loser/Loser';

// push urls into an array if the url is in the array return flase

const gamePieceArrayDefault = [
  {
    imgName: 'Thrall',
    url: 'http://www.loregy.com/wp-content/uploads/thrall1.jpg',
    beenClicked: false
  },
  {
    imgName: 'Sylvanis Windrunner',
    url: 'https://cdn-images-1.medium.com/max/2000/1*AXe1jF3b6hHRLX8ItpHhyA.png',
    beenClicked: false
  },
  {
    imgName: "Lor'themar",
    url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/7/79/Lor%27themar_Wei.jpg/200px-Lor%27themar_Wei.jpg?version=2c2a8df0285cb62170c439f565f27adc',
    beenClicked: false
  },
  {
    imgName: "Vol'jin",
    url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/f/f2/Vol%27jin_Wei.jpg/250px-Vol%27jin_Wei.jpg?version=a367606123267b73440db293e24f3820',
    beenClicked: false
  },
  {
    imgName: 'Baine Bloodhoof',
    url: 'https://blizzardwatch.com/wp-content/uploads/2016/01/baine_bloodhoof_glowei_header.jpg',
    beenClicked: false
  },
  {
    imgName: 'Jastor Gallywix',
    url: 'https://vignette.wikia.nocookie.net/wowwiki/images/a/ae/400px-Trade_Prince_Gallywix_Glowei.jpg/revision/latest?cb=20101224005048',
    beenClicked: false
  },
  {
    imgName: 'Varian Wrynn',
    url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/b/be/Varian_Wei.jpg/200px-Varian_Wei.jpg?version=d703a483de27e708c249401f586ecc59',
    beenClicked: false
  },
  {
    imgName: 'Malfurion Stormrage',
    url: 'https://i.pinimg.com/originals/be/8c/8c/be8c8c9215dad4fa807c822a0130b3a2.jpg',
    beenClicked: false
  },
  {
    imgName: 'Gelbin Mekkatorque',
    url: 'https://vignette.wikia.nocookie.net/wowwiki/images/d/dd/Gelbin_Wei.jpg/revision/latest?cb=20100304054352',
    beenClicked: false
  },
  {
    imgName: 'Magni Bronzebeard',
    url: 'https://vignette.wikia.nocookie.net/wowwiki/images/f/f0/Magni_Samwise.jpg/revision/latest?cb=20101015203606',
    beenClicked: false
  },
  {
    imgName: 'Prophet Velen',
    url: 'http://vignette2.wikia.nocookie.net/wowwiki/images/f/f2/Velen_Wei.jpg/revision/latest?cb=20100304054354',
    beenClicked: false
  },
  {
    imgName: 'Genn Greymane',
    url: 'https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/thumb/8/88/GennGreymaneArt.jpg/240px-GennGreymaneArt.jpg?version=566d1b50daf609f7ee5caaa70cd4891b',
    beenClicked: false
  }
]


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    lastGuess: "",
    gamePieceArray: [
      {
        imgName: 'Thrall',
        url: 'http://www.loregy.com/wp-content/uploads/thrall1.jpg',
        beenClicked: false
      },
      {
        imgName: 'Sylvanis Windrunner',
        url: 'https://cdn-images-1.medium.com/max/2000/1*AXe1jF3b6hHRLX8ItpHhyA.png',
        beenClicked: false
      },
      {
        imgName: "Lor'themar",
        url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/7/79/Lor%27themar_Wei.jpg/200px-Lor%27themar_Wei.jpg?version=2c2a8df0285cb62170c439f565f27adc',
        beenClicked: false
      },
      {
        imgName: "Vol'jin",
        url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/f/f2/Vol%27jin_Wei.jpg/250px-Vol%27jin_Wei.jpg?version=a367606123267b73440db293e24f3820',
        beenClicked: false
      },
      {
        imgName: 'Baine Bloodhoof',
        url: 'https://blizzardwatch.com/wp-content/uploads/2016/01/baine_bloodhoof_glowei_header.jpg',
        beenClicked: false
      },
      {
        imgName: 'Jastor Gallywix',
        url: 'https://vignette.wikia.nocookie.net/wowwiki/images/a/ae/400px-Trade_Prince_Gallywix_Glowei.jpg/revision/latest?cb=20101224005048',
        beenClicked: false
      },
      {
        imgName: 'Varian Wrynn',
        url: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/thumb/b/be/Varian_Wei.jpg/200px-Varian_Wei.jpg?version=d703a483de27e708c249401f586ecc59',
        beenClicked: false
      },
      {
        imgName: 'Malfurion Stormrage',
        url: 'https://i.pinimg.com/originals/be/8c/8c/be8c8c9215dad4fa807c822a0130b3a2.jpg',
        beenClicked: false
      },
      {
        imgName: 'Gelbin Mekkatorque',
        url: 'https://vignette.wikia.nocookie.net/wowwiki/images/d/dd/Gelbin_Wei.jpg/revision/latest?cb=20100304054352',
        beenClicked: false
      },
      {
        imgName: 'Magni Bronzebeard',
        url: 'https://vignette.wikia.nocookie.net/wowwiki/images/f/f0/Magni_Samwise.jpg/revision/latest?cb=20101015203606',
        beenClicked: false
      },
      {
        imgName: 'Prophet Velen',
        url: 'http://vignette2.wikia.nocookie.net/wowwiki/images/f/f2/Velen_Wei.jpg/revision/latest?cb=20100304054354',
        beenClicked: false
      },
      {
        imgName: 'Genn Greymane',
        url: 'https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/thumb/8/88/GennGreymaneArt.jpg/240px-GennGreymaneArt.jpg?version=566d1b50daf609f7ee5caaa70cd4891b',
        beenClicked: false
      }
    ]
  };

  scoreCheck = () => {
    if (this.state.currentScore === 12) {
      return true
    }
    else {
      return false
    }
  }

  componentDidUpdate() {
    this.scoreCheck()
  }

  handleClick = (index) => {
    // correct guess start
    if (!this.state.gamePieceArray[index].beenClicked) {
      for (let i = 0; i < this.state.gamePieceArray.length; i++) {
        if (i === index) {
          let oldState = this.state.gamePieceArray
          oldState[index].beenClicked = true
          this.setState({
            gamePieceArray: oldState,
            lastGuess: true,
            currentScore: this.state.currentScore + 1
          })
          if (this.state.currentScore + 1 >= 12) {
            this.setState({
              topScore: this.state.currentScore + 1,
              lastGuess: "Winner"
            })
          }
          else if (this.state.topScore <= this.state.currentScore + 1) {
            this.setState({ topScore: this.state.currentScore + 1 })
          }
        }//closes second if
      }//closes for loop
    }//closes correct guess 

    // incorrect Guess
    else if (this.state.gamePieceArray[index].beenClicked) {
      console.log(gamePieceArrayDefault)
      const holder = JSON.stringify(gamePieceArrayDefault)
      this.setState({
        gamePieceArray: [...JSON.parse(holder)],
        lastGuess: false,
        currentScore: 0
      });
    } // closes incorrect guess
  }//closes function


  // not mine↓
  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  reset = () => {
    const holder = JSON.stringify(gamePieceArrayDefault)
    this.setState({
      gamePieceArray: [...JSON.parse(holder)],
      lastGuess: "",
      currentScore: 0
    });
    return this.shuffle(this.state.gamePieceArray).map((piece, index) => {
      return <GamePiece key={index} index={index} onClick={this.handleClick} url={piece.url} imgName={piece.imgName} beenClicked={piece.beenClicked} />
    })
  }

  results = (value) => {
    console.log(value)
    switch (value) {
      case 'Winner': {
        return <Winner reset={this.reset} />
      }
      case true: {
        return this.shuffle(this.state.gamePieceArray).map((piece, index) => {
          return <GamePiece key={index} index={index} onClick={this.handleClick} url={piece.url} imgName={piece.imgName} beenClicked={piece.beenClicked} />
        })
        
      }
      case "": {
        return this.shuffle(this.state.gamePieceArray).map((piece, index) => {
          return <GamePiece key={index} index={index} onClick={this.handleClick} url={piece.url} imgName={piece.imgName} beenClicked={piece.beenClicked} />
        })
        
      }
      
      case false: {
        return <Loser reset={this.reset} />
      }
      default: {
        return console.log('oh no')
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Scorebar lastGuess={this.state.lastGuess} currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <TitleBlock />
        <div className='gameHolder'>
          {this.results(this.state.lastGuess)}
        </div>
      </div>
    );
  }
}

export default App;