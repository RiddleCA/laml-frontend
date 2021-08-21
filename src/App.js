import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Event from './Components/Event';
import Submit from './Components/Submit';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/event">
          <Nav />
          <Event />
        </Route>
        <Route>
          <Nav />
          <Submit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
