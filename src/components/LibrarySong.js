import React, {useEffect} from 'react'
const LibrarySong = ({song, setAllSongs, setCurrSong, allSongs, audioRef, isplaying, setIsplaying, filterStatus}) => {
    const changeFromLibraryHandler = async () =>{
        const selectSong = song;
        await setCurrSong(selectSong);
        const activeSong = allSongs.map((songs) =>{
            if(songs.id===song.id){
                return{
                    ...songs, active: true
                }
            }else{
                return{
                    ...songs, active: false
                }
            }
        });
        setAllSongs(activeSong)
        if(isplaying) audioRef.current.play();
        else{
            setIsplaying(!isplaying);
            audioRef.current.play();
        }
    }
    return (
        <div onClick={changeFromLibraryHandler} className={`librarySong ${song.active ? 'selectedLibrary' : ''}`}>
            <img src={song.cover} alt=""/>
            <div className="songdesc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
