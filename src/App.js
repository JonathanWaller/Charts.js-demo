import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes'
// import { Doughnut } from 'react-chartjs-2';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Nav />
          { routes }
          {/* <Home /> */}
          {/* <Nav />
          hellooo
          <BigDoughnut /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
