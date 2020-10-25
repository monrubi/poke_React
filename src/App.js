import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Barra from './components/Barra';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Barra />
        </div>
    );
  }
}

export default App;