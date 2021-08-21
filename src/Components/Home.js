import React from "react";
//import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-300 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-28">
      <div className="m-auto w-full p-8">
        <label className="m-auto text-purple-700 text-3xl" htmlFor="eventReg">Event</label><br />
        <input className="m-auto rounded-full my-2 p-3 w-full text-purple-900" type="text" name="eventReg" id="eventReg" /><br />
        <label className="m-auto text-purple-700 text-3xl" htmlFor="user">Username</label><br />
        <input className="m-auto rounded-full my-2 p-3 w-full text-purple-900" type="text" name="user" id="user" /><br />
        <input className="m-auto rounded-full my-8 p-3 text-3xl text-purple-300 w-full  bg-purple-700 hover:bg-purple-500 " type="button" value="Join" />
      </div>     
    </div>
  );
};

export default Home;
