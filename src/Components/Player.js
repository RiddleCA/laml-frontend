import React from 'react'

const Player = ({player}) => {
    return (
        
         <div className="bg-purple-300 bg-opacity-40 border-white border border-opacity-40 rounded-md my-2 card first:w-full first:bg-yellow-500">
            <p className="text-purple-600 text-2xl">{`${player.item_count} ${player.username}`}</p> <img src="../assets/slug-icon.png" className="w-20 m-auto" alt="" />
        </div>
    )
}

export default Player
