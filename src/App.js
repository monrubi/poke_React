import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Barra from './components/Barra';
import Tablero from './components/Tablero';
import Pokemon from './components/Pokemon';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Barra />
            <div className="container tablero">
              <Switch>
                <Route exact path="/" component={Tablero}/>
                <Route exact path="/pokemon/:pokeIdx" component={Pokemon}/>
              </Switch>
            </div>
        </div>
      </Router>
      
    );
  }
}

export default App;