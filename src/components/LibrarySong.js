import React from 'react'

const LibrarySong = ({song, setAllSongs, setCurrSong, allSongs, audioRef, isplaying, setIsplaying}) => {
    const changeFromLibraryHandler = () =>{
        const selectSong = song;
        setCurrSong(selectSong);
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
        audioRef.current.play()
        if(isplaying){
            const playPromise = audioRef.current.play();
            if (playPromise!==undefined){
                playPromise.then((audio)=>{
                    audioRef.current.play();
                });
            }
        }else{
            const playPromise = audioRef.current.play();
            if (playPromise!==undefined){
                playPromise.then((audio)=>{
                    audioRef.current.play();
                });
            }
            setIsplaying(!isplaying)
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
