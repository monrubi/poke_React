import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Barra from './components/Barra';
import Tablero from './components/Tablero';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Barra />
            <div className="container">
              <Tablero />
            </div>
        </div>
    );
  }
}

export default App;