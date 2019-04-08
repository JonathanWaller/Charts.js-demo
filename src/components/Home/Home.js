import React, { Component } from 'react';
import './Home.css'

import { connect } from 'react-redux';
import { updateFood, updateInput } from '../ducks/foodReducer';

class Home extends Component {
    // constructor()
    // {
    //     super();
    //     this.state = {
    //         food: 'pizza'
    //         , input: ''
    //     }
    // }
    
    // handleInput = (e) => {
    //     this.setState({
    //         input: e.target.value
    //     })
    // }
    
    // handleClick = () => {
    //     this.setState({
    //         food: this.state.input,
    //         input: ''
    //     })
    // }
    
    render(){
        console.log('state: ', this.state)
        console.log('PROPS: ', this.props);
        return(
            <div className = 'home-wrapper'>
                <div>
                {/* <input 
                    placeholder='enter food here'
                    onChange = {e => this.handleInput(e)}
                 /> */}
                  <input 
                    placeholder='enter food here'
                    onChange = {e => this.props.updateInput(e)}
                 />
                {/* <button onClick={()=>this.handleClick()}>Submit</button> */}
                <button onClick={()=>this.props.updateFood(this.props.input)}>Submit</button>
                </div>
            
            <div>
                My favorite food is {this.props.food} .
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

// export default Home;
export default connect(
    mapStateToProps,
    { updateFood, updateInput }
)(Home);