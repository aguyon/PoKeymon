import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Solo from './Solo';
import Duo from './Duo';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/solo-mode" component={Solo} />
              <Route path="/dual-mode" component={Duo} />
              <Route path="/pokedex" component={Pokedex} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
