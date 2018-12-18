import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home'
import './layout.css';
import './css/bootstrap_limitless.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainForm from "./components/MainForm";

ReactDOM.render( <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={MainForm} />
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
