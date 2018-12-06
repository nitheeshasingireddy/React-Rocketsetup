import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';

import './App.css';
import AppFooter from './components/AppFooter/AppFooter';
import Home from './components/Home/Home';
import MainForm from './components/MainForm';

class App extends Component {
  render() {
    return (
      <body style={{backgroundColor:'#f5f5f5'}}>
      <div className="App">
      <div className="navbar navbar-dark fixed-top">
      <AppHeader />
      </div>
        <MainForm />
        <div className="navbar navbar-light fixed-bottom">
        <AppFooter />
        </div>
      </div>
      </body>
      
    );
  }
}

export default App;
