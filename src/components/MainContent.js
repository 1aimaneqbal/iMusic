import React from 'react'
import SongControls from './MainContent/SongControls'
import SongInfo from "./MainContent/SongInfo"
const MainContent = ({allSongs, setAllSongs, currSong, setCurrSong, isplaying, setIsplaying, audioRef, time, setTime, libraryUpdater, setLibraryUpdater, addSongsPane, setAddSongsPane}) => {
    const mainContentHandler = () => {
        if(libraryUpdater) setLibraryUpdater(!libraryUpdater)
        if(addSongsPane) setAddSongsPane(!addSongsPane)
    }
    const bgGradStyle ={
        background: `linear-gradient(to bottom, #fff, ${currSong.color[1]})`
    }
    
    return (
        <div className="AppContainer" >
            <div onClick={mainContentHandler} className={`App ${libraryUpdater ? 'maincomponent' : ''}`}>
                <SongInfo currSong={currSong}/>
                <SongControls 
                    currSong={currSong} 
                    isplaying={isplaying} 
                    setIsplaying={setIsplaying}
                    audioRef={audioRef}
                    time={time}
                    setTime={setTime}
                    allSongs={allSongs}
                    setAllSongs={setAllSongs}
                    setCurrSong={setCurrSong}
                />
            </div>
            <div style={bgGradStyle} className="bgGrad"></div>
        </div>
    )
}

export default MainContent