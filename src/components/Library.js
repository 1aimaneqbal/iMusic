import React from 'react'
import LibrarySong from './LibrarySong'
const Library = ({allSongs, setAllSongs, setCurrSong, audioRef, isplaying, setIsplaying}) => {
    return (
        <div className="library">
            <h2>Library</h2>
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
