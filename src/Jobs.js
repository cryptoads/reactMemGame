import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem.js';
import axios from 'axios';



class Jobs extends Component {
    constructor(){
        super()
        this.state = {jobs:[]}
    }

    componentWillMount(){
        axios.get('/api/jobs')
        .then(({ data })=>{this.setState({jobs: data})})
    }

    render(){
        let jobsJSX = this.state.jobs.map((jobs, index)=><JobsListItem key={index} {...jobs} />)
        return(
            <div>
            <div className="App">
            <header className="App-header">
            <h1 className="App-title" >Jobs In Atlanta</h1>
            <p className="App-subtitle"> click to explore jobs</p>
            </header>
            </div>
            <div className="Jobs">{jobsJSX}</div>
            </div>
            );
    }
}

export default Jobs; 