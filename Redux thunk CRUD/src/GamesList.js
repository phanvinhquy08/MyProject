import React from 'react'

const GamesList = ({ games }) => {
    return (
        <div>
            {games.length > 0 && <p>Games list</p>}
            {games.length <= 0 && <p>There is no games in list</p>}
        </div>
    )
}

export default GamesList
