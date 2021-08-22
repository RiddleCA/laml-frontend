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

  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
  
  let players = [
    {
      user: "test",
      score:6
    },
    {
      user: "callum",
      score:8
    },
    {
      user: "Breanna",
      score:2
    }

  ]
  players.sort((x,y) => {return y.score - x.score});
    
  
  
  return (
    <Router>
      <Nav />
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/event">
          
          <Event players={players}/>
        </Route>
        <Route>
          <Submit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
