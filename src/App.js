import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'; 
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';


class App extends Component {
    constructor(){
        super()
    }

render(){
    return (
        <div>
        <div className="navbar">
            <Link to="/memory">Memory Game</Link>
            <Link to="/jobs">Job Search</Link>
        </div>
        <Switch>
            <Route exact path="/" component={MemoryGame} />
            <Route path="/memory" component={MemoryGame} />
            <Route path="/jobs" component={Jobs} />
        </Switch>
        </div>
        )
}

}

export default App;