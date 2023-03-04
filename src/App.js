import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import Portfolio from './components/Portfolio'; 
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/myresume" component={MyResume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/contactfor," component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
