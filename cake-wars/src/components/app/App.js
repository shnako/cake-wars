import './App.css';
import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import Cakes from '../cakes/CakesPage'
import CakeDetails from '../cake-details/CakeDetailsPage'
import CakeSubmit from '../cake-submit/CakeSubmitPage'
import {Navbar} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Navbar fluid>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>
                <strong className='app-title'>Cake Wars</strong>
              </Link>
              <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
              <ul className='nav navbar-nav navbar-nav-underline-interaction'>
                <LinkContainer className='nav-button' exact to='/'>
                  <li>
                    <a>Cakes</a>
                  </li>
                </LinkContainer>
                <LinkContainer className='nav-button' exact to='/cake/submit'>
                  <li>
                    <a>Submit</a>
                  </li>
                </LinkContainer>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className='app-content'>
          <Route exact path='/' component={Cakes}/>
          <Switch>
            <Route path='/cake/submit' component={CakeSubmit}/>
            <Route path='/cake/:cakeId' component={CakeDetails}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
