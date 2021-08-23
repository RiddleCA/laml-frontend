import React from "react";
import Player from './Player.js';
import {Link} from "react-router-dom";

const Event = ({players, eventInfo}) => {
  console.log(players.length);
  return players.length === 0 ? (
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
          <p className="text-purple-300">To access this page plese sign into an Event</p>
          <Link className="my-auto px-4 py-2 text-purple-200 sm:hover:text-purple-700 sm:hover:bg-purple-200  rounded-full  font-extrabold" to="/">Home </Link>
      </div>
    </div>
  ):(
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
        <h2 className="text-purple-200 text-4xl">{eventInfo.title}</h2>
        <h3 className="text-purple-200">{eventInfo.description}</h3>
        <p className="text-right text-purple-200">Target {eventInfo.item_max}</p>
        <div className="">
          {players.map((player) => <Player player={player}/>)}
        </div>
        
      </div>
    </div>
  );
};

export default Event;
