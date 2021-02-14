import React from 'react'
import LibrarySong from './LibrarySong'
const Library = ({allSongs, setAllSongs, setCurrSong, audioRef, isplaying, setIsplaying, libraryUpdater, setFilterStatus}) => {
    const statusHandler = (e) => {
        setFilterStatus(e.target.value)
    }
    return (
        <div className={`library ${libraryUpdater ? 'activelibrary' : ''}`}>
            <h2>Library</h2>
            <div className="select">
                <select onChange={statusHandler} name="songSelection" className="selectionClass">
                    <option value="all">All</option>
                    <option value="en">English</option>
                    <option value="jp">Japanese</option>
                </select>
            </div>
            <div className="individualLibraryComponent">
                {allSongs.map((song) =>(
                    <LibrarySong song={song} setCurrSong={setCurrSong} key={song.id} allSongs={allSongs} audioRef={audioRef} 
                    isplaying={isplaying}
                    setIsplaying={setIsplaying}
                    setAllSongs={setAllSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library
