import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom';

const ApplePage = () => (
  <h1> Apple </h1>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/apple' component={ApplePage} />
      </Switch>
    </div>
  );
}

export default App;
