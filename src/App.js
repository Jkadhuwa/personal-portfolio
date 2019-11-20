import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/presentational/HomepageComponent';
import About from './components/presentational/AboutComponent';
import Portfolio from './components/presentational/PortfolioComponent';
import Contacts from './components/presentational/ContactsComponent';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/styles/main.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};
export default App;
