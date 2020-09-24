import React, {useState, useCallback, useRef, useEffect} from 'react';
import './App.css';
import Congame from './components/Congame'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
 
return (
  <Router>
    <NavBar />
    <Header />
    <div>
      <Switch>
        <Route exact path = '/' component={Body}></Route>
        <Route exact path ='/Conways_Game' component={Congame}></Route>
      
      </Switch>
    </div>
  </Router>  
  )
}

export default App;
