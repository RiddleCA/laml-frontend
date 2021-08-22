import React from "react";
import {useState} from 'react';
import {useHistory} from "react-router-dom";

const Home = ({onClick}) => {
  const [event, setEvent] = useState("");
  const [username, setUsername] = useState("");
  let history = useHistory();

  function onSubmit(){
    onClick(event, username);
    history.push("/event");
  }

  

  return (
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
        <img className="w-20 m-auto" src="../assets/slug-icon.png" alt="" />
        <label className="m-auto text-purple-200 text-3xl" htmlFor="eventReg">Event</label><br />
        <input className="m-auto rounded-full my-2 p-3 w-full bg-gray-300 bg-opacity-40 text-purple-900 focus:ring-purple-200 focus:ring outline-none" type="text" name="eventReg" id="eventReg" onChange={(e) => setEvent(e.target.value)}/><br />
        <label className="m-auto text-purple-200 text-3xl" htmlFor="user">Username</label><br />
        <input className="m-auto rounded-full my-2 p-3 w-full bg-gray-300 bg-opacity-40 text-purple-900 focus:ring-purple-200 focus:ring outline-none" type="text" name="user" id="user" onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="m-auto rounded-full my-8 p-3 text-3xl text-purple-300 w-full  bg-purple-700 hover:bg-purple-500 hover:ring-purple-200 hover:ring" type="button" value="Join" onClick={onSubmit} />
      </div>     
    </div>
  );
};

export default Home;
