import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style = {{height: 80}}>

          <h1 className="App-title">Memory Game</h1>
          <h3 className="App-subTitle" style={{color: '#666666'}}> Match cards to win</h3>
        </header>
        <div>
          <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
        </div>
        <div>
          <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
        </div>
        <div>
          <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
        </div>
        <div>
          <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;
