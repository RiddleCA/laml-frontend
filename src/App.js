import React from 'react';
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Event from './Components/Event';
import Submit from './Components/Submit';
import axios from 'axios';




function App() {

  const [eventCookie, setEventCookie] = useState("")
  const [usernameCookie, setUsernameCookie] = useState("")
  const [players, setPlayers] = useState([]);
  const [eventInfo, setEventInfo] = useState([]);
  

  useEffect(()=>{
    let ec = getCookie('event')
    let uc = getCookie('username')
    setEventCookie(ec);
    setUsernameCookie(uc);

    async function checkCookies(event){
      if(event !== ""){
        const eventDetails = await axios.get(`https://leaderboard.koldfusion.xyz/api/event/${event}`).then(res => res.data);
        const playerList = await axios.get(`https://leaderboard.koldfusion.xyz/api/event/${event}/players`).then(res => res.data);
        setPlayers(playerList); 
        setEventInfo(eventDetails);
        

      }
    }
    checkCookies(ec);
    
  },[]);
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  async function onClick(event, username){
    if(event !== "" && username !== ""){
      const eventDetails = await axios.get(`https://leaderboard.koldfusion.xyz/api/event/${event}/`).then(res => res.data);
      if(eventDetails !== {}){
        setCookie("event", event, 1);
        setCookie("username", username, 1); 
        setEventInfo(eventDetails);
        setEventCookie(event);
        setUsernameCookie(username);
        
        const playerList = await axios.get(`https://leaderboard.koldfusion.xyz/api/event/${event}/players/`).then(res => res.data);
        
        setPlayers(playerList);   
        await createPlayer(username);
      }
    }
  }
  function createPlayer(event, username){
      axios.post(`https://leaderboard.koldfusion.xyz/api/event/${event}/player/{username}`)
  }
  
  players.sort((x,y) => {return y.score - x.score});
  return ( 
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
         <Home onClick={onClick} />
        </Route>
        <Route path="/event">
          <Event players={players} eventInfo={eventInfo}/>
        </Route>
        <Route path='/submit'>
          <Submit playerCount={players.length}/>
        </Route>
      </Switch>
    </Router>
  )
  
}

export default App;
