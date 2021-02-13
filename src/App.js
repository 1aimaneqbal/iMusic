import React, {useState, useRef} from 'react'
import "./styles/app.css"
import MainContent from "./components/MainContent"
import data from './data'
import Library from './components/Library'
const App = () => {
    const [allSongs, setAllSongs] = useState(data());
    const [currSong, setCurrSong] = useState(allSongs[0]);
    const [isplaying, setIsplaying] = useState(false);
    const [time, setTime] = useState({
        current: 0,
        duration: 0
    });
    const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setTime({
            ...time, current, duration
        })
    };
    const audioRef = useRef(null);
    return (
        <div>
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
             />
             <Library 
                allSongs={allSongs}
                setCurrSong={setCurrSong}
                audioRef={audioRef}
                isplaying={isplaying}
                setIsplaying={setIsplaying}
                setAllSongs={setAllSongs}
            />
            <audio ref={audioRef} src={currSong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}></audio>
        </div>
    )
}

export default App
