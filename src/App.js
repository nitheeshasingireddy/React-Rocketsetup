import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import MainForm from './components/MainForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <body style={{backgroundColor:'#f5f5f5'}}>
      <div className="App" >

      <div className="navbar navbar-dark fixed-top">
      <AppHeader />
      </div>
        <MainForm />
        {/* <div className="navbar navbar-light fixed-bottom"> */}
        <div className="navbar"> 
        <AppFooter/>
        </div>
        {/* </div> */}
      </div>
      </body>
      
    );
  }
}

export default App;
