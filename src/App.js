import React, {useState, useRef} from 'react'
import "./styles/app.css"
import MainContent from "./components/MainContent"
import data from './data'
import Library from './components/Library'
import Nav from './components/Nav'
const App = () => {
    const [allSongs, setAllSongs] = useState(data());
    const [currSong, setCurrSong] = useState(allSongs[0]);
    const [isplaying, setIsplaying] = useState(false);
    const [time, setTime] = useState({
        current: 0,
        duration: 0,
        animation: 0,
    });
    const [libraryUpdater, setLibraryUpdater] = useState(false)
    const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const roundCurrent = Math.round(current)
        const roundDuration = Math.round(duration)
        const animation = Math.round((roundCurrent/roundDuration)*100)
        setTime({
            ...time, current, duration, animation
        })
    };
    const audioRef = useRef(null);
    const onSongEndHandler = async () => {
        const currentIndex = allSongs.findIndex((song) => song.id === currSong.id)
        await setCurrSong(allSongs[(currentIndex + 1) % allSongs.length]);
        if(isplaying) audioRef.current.play()
    }
    return (
        <div>
            <Nav
            libraryUpdater={libraryUpdater}
            setLibraryUpdater={setLibraryUpdater}
            />
            <MainContent 
                allSongs={allSongs}
                setAllSongs={setAllSongs}
                currSong={currSong}
                setCurrSong={setCurrSong}
                isplaying={isplaying}
                setIsplaying={setIsplaying}
                audioRef={audioRef}
                time={time}
                setTime={setTime}
                libraryUpdater={libraryUpdater}
             />
             <Library 
                allSongs={allSongs}
                setCurrSong={setCurrSong}
                audioRef={audioRef}
                isplaying={isplaying}
                setIsplaying={setIsplaying}
                setAllSongs={setAllSongs}
                libraryUpdater={libraryUpdater}
            />
            <audio 
                ref={audioRef}
                src={currSong.audio}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={onSongEndHandler}
            ></audio>
        </div>
    )
}

export default App
