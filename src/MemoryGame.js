import React, { Component } from 'react';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js';


let generateDeck = () =>{
  let symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  for(var i =0; i<16; i++){
    deck.push({isFlipped: false, symbol: symbols[i%8]})
  }
  shuffle(deck);
  return(deck);
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


class MemoryGame extends Component {
  constructor(){
    super();
    this.state = {deck: generateDeck(), pickedCards: []};

  }


  pickCard(cardIndex){

    if(this.state.deck[cardIndex].isFlipped){
      return;
    }
    let cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;
 
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index)=>{
      if(cardIndex == index){
        return cardToFlip;
      }
      return card;
    })

    if(newPickedCards.length == 2){
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if(newDeck[card1Index].symbol !== newDeck[card2Index].symbol){
        setTimeout(this.unflipCards.bind(this,card1Index, card2Index),1000)
      }
      newPickedCards = []
    }
    this.setState({deck: newDeck, pickedCards:newPickedCards});
  }

  unflipCards(card1Index, card2Index){
        let card1 = {...this.state.deck[card1Index]}
        let card2 = {...this.state.deck[card2Index]}
        card1.isFlipped = false;
        card2.isFlipped = false;
        var newDeck = this.state.deck.map((card, index)=>{
          if(card1Index == index){
            return card1;
          }else if (card2Index == index) {
            return card2;
          }
          return card;
        
        })
        console.log(newDeck)
      this.setState({deck: newDeck});
  }


  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this,index)} />
    });
    return (
      <div className="App">
        <header className="App-header" style = {{height: 80}}>

          <h1 className="App-title">Memory Game</h1>
          <h3 className="App-subTitle" style={{color: '#666666'}}> Match cards to win</h3>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}


export default MemoryGame;
