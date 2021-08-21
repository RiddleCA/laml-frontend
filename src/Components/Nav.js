import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex h-16 bg-purple-700 justify-around">
            <Link className="my-auto px-4 py-2 text-purple-200 hover:text-purple-700 hover:bg-purple-200  rounded-full  font-extrabold" to="/">Home </Link>
            <Link className="my-auto px-4 py-2 text-purple-200 hover:text-purple-700 hover:bg-purple-200  rounded-full font-extrabold" to="/event">Event </Link>
            <Link className="my-auto px-4 py-2 text-purple-700 bg-purple-200 sm:bg-purple-700 sm:text-purple-200 sm:hover:text-purple-700 sm:hover:bg-purple-200  rounded-full font-extrabold" to="/submit">Submit </Link>
        </nav>
    )
}

export default Nav
