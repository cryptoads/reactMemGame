import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem.js';
import axios from 'axios';
import Job from './Job.js';
import { Switch, Route } from 'react-router-dom';



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
            <div className="Jobs"><Switch><Route exact path="/jobs" render={ () => jobsJSX} /> <Route path="/jobs/:id" component={Job} /> </Switch></div>
            </div>
            );
    }
}

export default Jobs; 