import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './Components/MenuBar';
import Home from './Pages/Home';
import FormAddHotel from './Pages/FormAddHotel';
import Detail from './Pages/Detail';

export default class App extends React.Component {
  render() {

    
    // const CreateHotel = () => <h2>Create</h2>;
    return (
      <div className="App">
        <Router>
          <MenuBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/add" component={FormAddHotel} />
          </Switch>
        </Router>
      </div>
    );
  }
}


