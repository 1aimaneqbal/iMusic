import React, {useState,} from 'react'
const SongInfo = ({currSong}) => {
    return (
        <div>
            <div className="CurrentSongPlayingInfo">
                <img src={currSong.cover} alt=""/>
                <h2>{currSong.name}</h2>
                <h3>{currSong.artist}</h3>
            </div>
        </div>
    )
}

export default SongInfo
