import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Cakes from '../cakes/CakesPage'
import CakeDetails from '../cake-details/CakeDetailsPage'
import CakeSubmit from '../cake-submit/CakeSubmitPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Cake Wars</h1>
        </header>
        <p className="App-intro">
          <Route exact path='/' component={Cakes}/>
          <Switch>
            <Route path='/cake/submit' component={CakeSubmit}/>
            <Route path='/cake/:cakeId' component={CakeDetails}/>
          </Switch>
        </p>
      </div>
    );
  }
}

export default App;
