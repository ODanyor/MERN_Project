import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//Redux


// React Components
import Navbar from './components/navbar/navbar.component';
import HomePage from './components/homePage.component';
import SignUp from './components/signUp.component';
import SignIn from './components/signIn.component';
import ShoppingList from './components/shoppingList.component';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='switch'>
            <Switch>
              <Route exact strict path='/' component={HomePage} />
              <Route exact strict path='/signUp' component={SignUp} />
              <Route exact strict path='/signIn' component={SignIn} />
              <Route exact strict path='/list' component={ShoppingList} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
