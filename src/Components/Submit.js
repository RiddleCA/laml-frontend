import React from "react";
import {useState} from 'react';
import {Link} from "react-router-dom";

const Submit = ({playerCount}) => {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(currCount => currCount + 0.5);
  }
  function decrement(){
    setCount(currCount => currCount - 0.5)
  }
  console.log(playerCount === 0);
  return playerCount === 0 ? (
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
        <p className="text-purple-300">To access this page please sign into an Event</p>
        <Link className="my-auto px-4 py-2 text-purple-200 sm:hover:text-purple-700 sm:hover:bg-purple-200  rounded-full  font-extrabold" to="/">Home </Link>
      </div>
    </div>
  ): (
    <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
      <div className="m-auto w-full p-8">
      <img className="w-20 m-auto pb-6" src="../assets/slug-icon.png" alt="" />
        <div className="flex justify-around">
           <input className="rounded-full my-8 p-2 w-1/4 text-3xl text-purple-300 bg-purple-700 hover:bg-purple-500 hover:ring-purple-200 hover:ring" type="button" value="-" onClick={decrement} />
           <p className="text-purple-300 text-6xl ">{count}</p>
           <input className="rounded-full my-8 p-2 w-1/4 text-3xl text-purple-300 bg-purple-700 hover:bg-purple-500 hover:ring-purple-200 hover:ring" type="button" value="+" onClick={increment}/>
        </div>
        <input className="m-auto rounded-full my-8 p-2 text-3xl text-purple-300 w-full  bg-purple-700 hover:bg-purple-500 hover:ring-purple-200 hover:ring" type="button" value="Submit"  />
      </div>
    </div>
  );
};

export default Submit;
