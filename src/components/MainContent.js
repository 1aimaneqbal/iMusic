import React from 'react'
import SongControls from './MainContent/SongControls'
import SongInfo from "./MainContent/SongInfo"
const MainContent = ({allSongs, setAllSongs, currSong, setCurrSong, isplaying, setIsplaying, audioRef, time, setTime}) => {
    return (
        <div>
            <SongInfo currSong={currSong}/>
            <SongControls currSong={currSong} isplaying={isplaying} setIsplaying={setIsplaying}
            audioRef={audioRef}
            time={time}
            setTime={setTime}
            />
        </div>
    )
}

export default MainContent
