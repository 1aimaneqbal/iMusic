import React, {useState, useRef, useEffect} from 'react'
import "./styles/app.css"
import MainContent from "./components/MainContent"
import Library from './components/Library'
import Nav from './components/Nav'
import Add from './Add'

const Main = ({fetchedSongs}) => {
    const unfilteredSongs = fetchedSongs;
    const [allSongs, setAllSongs] = useState(unfilteredSongs);
    const [filterStatus, setFilterStatus] = useState('all')
    const [currSong, setCurrSong] = useState(allSongs[0]);
    const [isplaying, setIsplaying] = useState(false);
    const [time, setTime] = useState({
        current: 0,
        duration: 0,
        animation: 0,
    });
    const [libraryUpdater, setLibraryUpdater] = useState(false)
    const [addSongsPane, setAddSongsPane] = useState(false)
    const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const animation = (current/duration)*100
        setTime({
            ...time, current, duration, animation
        })
    };
    const audioRef = useRef(null);
    const onSongEndHandler = async () => {
        const currentIndex = allSongs.findIndex((song) => song._id === currSong._id)
        await setCurrSong(allSongs[(currentIndex + 1) % allSongs.length]);
        if(isplaying) audioRef.current.play()
    }
    const filterHandler = () => {
        switch(filterStatus){
            case 'jp':
                setAllSongs(unfilteredSongs.filter(e => e.lang === 'jp'))
                break;
            case 'en':
                setAllSongs(unfilteredSongs.filter(e => e.lang === 'en'))
                break;
            default:
                setAllSongs(unfilteredSongs)
                break;
        }
    }
    useEffect(()=>{
        filterHandler()
    }, [filterStatus])
    return (
        <>
            <Nav
            libraryUpdater={libraryUpdater}
            setLibraryUpdater={setLibraryUpdater}
            addSongsPane={addSongsPane}
            setAddSongsPane={setAddSongsPane}
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
                setLibraryUpdater={setLibraryUpdater}
                addSongsPane={addSongsPane}
                setAddSongsPane={setAddSongsPane}
             />
             <Library 
                allSongs={allSongs}
                setCurrSong={setCurrSong}
                audioRef={audioRef}
                isplaying={isplaying}
                setIsplaying={setIsplaying}
                setAllSongs={setAllSongs}
                libraryUpdater={libraryUpdater}
                setFilterStatus={setFilterStatus}
            />
            <audio 
                ref={audioRef}
                src={currSong.audio}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={onSongEndHandler}>
            </audio>
            <Add
                addSongsPane={addSongsPane}
            />
        </>
    )
}

export default Main
