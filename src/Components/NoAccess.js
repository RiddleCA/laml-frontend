import React from 'react'
import {Link} from "react-router-dom";

const NoAccess = () => {
    return (
        <div className="bg-gray-300 bg-opacity-40 border-white border border-opacity-40 w-5/6 md:w-2/5 h-5/6 m-auto rounded-lg mt-16 md:mt-28 card">
            <div className="m-auto w-full p-8">
                <p className="text-purple-300">To access this page plese sign into an Event</p>
                <Link className="my-auto px-4 py-2 text-purple-200 sm:hover:text-purple-700 sm:hover:bg-purple-200  rounded-full  font-extrabold" to="/">Home </Link>
            </div>
        </div>
    )
}

export default NoAccess
