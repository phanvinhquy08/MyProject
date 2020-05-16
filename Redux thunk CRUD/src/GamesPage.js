import React from 'react'
import GameList from './GamesList';

const GamesPage = () => {
    return (
        <div>
            <h1>Game list</h1>
            <GameList games={[]}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { games: state.game }
}

export default GamesPage
