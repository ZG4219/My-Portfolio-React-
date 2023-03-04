import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MyPage from './components/mypage';

function App() {
  return (
    <Router>
      <div className="App">
        <MyPage/>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
