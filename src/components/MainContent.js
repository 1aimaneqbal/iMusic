import React from 'react'
import SongControls from './MainContent/SongControls'
import SongInfo from "./MainContent/SongInfo"
const MainContent = ({allSongs, setAllSongs, currSong, setCurrSong, isplaying, setIsplaying, audioRef, time, setTime, libraryUpdater, setLibraryUpdater}) => {
    const mainContentHandler = () => {
        if(libraryUpdater) setLibraryUpdater(!libraryUpdater)
    }
    return (
        <div onClick={mainContentHandler} className={`App ${libraryUpdater ? 'maincomponent' : ''}`}>
            <SongInfo currSong={currSong}/>
            <SongControls currSong={currSong} isplaying={isplaying} setIsplaying={setIsplaying}
            audioRef={audioRef}
            time={time}
            setTime={setTime}
            allSongs={allSongs}
            setAllSongs={setAllSongs}
            setCurrSong={setCurrSong}
            />
        </div>
    )
}

export default MainContent
