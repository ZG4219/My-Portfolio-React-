import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Contact from './pages/Contact';
import MyPage from './components/mypage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyPage/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
