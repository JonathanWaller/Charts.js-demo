import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor()
    {
        super();
        this.state = {
            food: 'pizza'
            , input: ''
        }
    }
    
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    
    handleClick = () => {
        this.setState({
            food: this.state.input,
            input: ''
        })
    }
    
    render(){
        console.log('state: ', this.state)
        return(
            <div className = 'home-wrapper'>
                <div>
                <input 
                    placeholder='enter food here'
                    onChange = {e => this.handleInput(e)}
                 />
                <button onClick={()=>this.handleClick()}>Submit</button>
                </div>
            
            <div>
                My favorite food is {this.state.food}.
            </div>
            </div>
        )
    }
}

export default Home;