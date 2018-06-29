import React, { Component } from 'react';
import App from './App';
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(){
        super();
        this.state = {isFlipped: false};
    }
    render() {
        let clickHandler=()=>{
            this.setState({isFlipped: !this.state.isFlipped})
        };

        let memoryCardInnerClass = "MemoryCardInner";

        if(this.state.isFlipped){
            memoryCardInnerClass += " flipped";
        }
        return (
            <div className="MemoryCard" onClick={clickHandler}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" /></div> 
                    <div className="MemoryCardFront">
                      ∆
                    </div>
                </div>
            </div>)
    }
}

export default MemoryCard;