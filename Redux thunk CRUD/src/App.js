import React from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";

import GamesPage from './GamesPage';

function App() {
  return (
    <div className="App">
      <Link to="/games">Games</Link>
      <Switch>
        <Route exact path="/games" component={GamesPage}/>
      </Switch>
    </div>
  );
}

export default App;
