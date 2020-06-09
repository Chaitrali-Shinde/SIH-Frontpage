import React from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import RegistrationPg from './components/Registration/RegistrationPg';
import LoginPg from './components/Registration/LoginPg'

function App() {
  return (
   
      <div>
        <Router>
        <Route exact path= "/" component= {FrontPage}/>
        <Route path= "/loginPg" component= {LoginPg}/>
        <Route path= "/registrationPg" component= {RegistrationPg}/>
        </Router>
      </div>
  
  );
}

export default App;
