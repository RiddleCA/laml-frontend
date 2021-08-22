import React from "react";
import Player from './Player.js';

const Event = ({players}) => {
  return (
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
        {players.map((player) => <Player player={player}/>)}
      </div>
    </div>
  );
};

export default Event;
