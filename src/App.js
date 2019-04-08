import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import store from './store';
import { Provider } from 'react-redux';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <BrowserRouter >
          <div className="App">
            <Nav />
            { routes }
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
