import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay,faPause , faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
const SongControls = ({currSong, isplaying, setIsplaying, audioRef, time, setTime}) => {
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
    return (
        <div>
            <div className="CurrentSongControls">
                <div className="TimeStamp">
                    <p>{getTime(time.current)}</p>
                    <input min={0} max={time.duration || 0} value={time.current} onChange={dragHandler} type="range"/>
                    <p>{getTime(time.duration)}</p>
                </div>
                <div className="MediaControls">
                    <FontAwesomeIcon className="prev" size="2x" icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={playPauseHandler} className="play" size="2x" icon={isplaying ? faPause : faPlay} />
                    <FontAwesomeIcon className="next" size="2x" icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}

export default SongControls
