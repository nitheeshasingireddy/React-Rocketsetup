import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import MainForm from './components/MainForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:'#f5f5f5'}}>
      <div className="navbar navbar-dark fixed-top">
      <AppHeader />
      </div>
        <MainForm />
        <div className="navbar navbar-light fixed-bottom">
        <AppFooter />
        </div>
      </div>
      
    );
  }
}

export default App;
