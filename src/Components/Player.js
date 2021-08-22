import React from 'react'

const Player = ({player}) => {
    return (
        <div >
            <div className="bg-purple-300 bg-opacity-40 border-white border border-opacity-40 rounded-md my-2 card">
                <p className="text-purple-600">{`${player.score} ${player.user}`}</p>
            </div>
            
        </div>
    )
}

export default Player
