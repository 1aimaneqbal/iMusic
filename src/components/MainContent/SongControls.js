import React, {useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay,faPause , faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
const SongControls = ({currSong, setCurrSong, allSongs, setAllSongs, isplaying, setIsplaying, audioRef, time, setTime}) => {
    const playPauseHandler = () => {
        if(isplaying){
            audioRef.current.pause()
            setIsplaying(!isplaying)
        }else{
            audioRef.current.play()
            setIsplaying(!isplaying)
        }
    }
    const getTime =(time)=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setTime({...time, current: e.target.value})
    }
    const skipHandler = async (direction) => {
        const currentIndex = allSongs.findIndex((song) => song._id === currSong._id)
        if(direction==='next'){
            await setCurrSong(allSongs[(currentIndex + 1) % allSongs.length]);
        }
        if(direction==='prev'){
            if((currentIndex - 1)=== -1)
                await setCurrSong(allSongs[allSongs.length - 1]);
            else
                await setCurrSong(allSongs[(currentIndex - 1) % allSongs.length]);
        }
        if(isplaying) audioRef.current.play()
    }
    useEffect(()=>{
        const activeSong = allSongs.map((songs) =>{
            if(songs._id===currSong._id){
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
    }, [currSong]);
    const sliderAnim ={
        width: `${time.animation}%`,
        background: `linear-gradient(to right, ${currSong.color[0]}, ${currSong.color[1]})`
    }
    return (
        <div>
            <div className="CurrentSongControls">
                <div className="TimeStamp">
                    <p>{getTime(time.current)}</p>
                    <div className="track">
                        <input min={0} max={time.duration || 0} value={time.current} onChange={dragHandler} type="range"/>
                        {/* <div className="trackAnim"></div> */}
                        <div style={sliderAnim} className="trackAnim"></div>
                    </div>
                    <p>{time.duration ? getTime(time.duration) : '0:00'}</p>
                </div>
                <div className="MediaControls">
                    <FontAwesomeIcon onClick={()=> skipHandler('prev')} className="prev" size="2x" icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={playPauseHandler} className="play" size="2x" icon={isplaying ? faPause : faPlay} />
                    <FontAwesomeIcon onClick={()=> skipHandler('next')} className="next" size="2x" icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}

export default SongControls
