import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';

import './App.css';
import AppFooter from './components/AppFooter/AppFooter';
import Home from './components/Home/Home';
import MainForm from './components/MainForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="navbar navbar-dark fixed-top">
      <AppHeader />
      </div>
        <MainForm />
        <AppFooter />
      </div>
      
    );
  }
}

export default App;
