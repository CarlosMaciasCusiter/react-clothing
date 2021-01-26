import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component.jsx';
import Hatspage from './pages/hats/Hats.component.jsx'
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={Hatspage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
