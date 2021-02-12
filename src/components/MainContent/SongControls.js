import React from 'react'

const SongControls = () => {
    return (
        <div>
            <div className="CurrentSongControls">
                <div className="TimeStamp">
                    <p>0:00</p>
                    <input type="range"/>
                    <p>8:00</p>
                </div>
                <div className="MediaControls">
                    <p>Prev</p>
                    <p>Play</p>
                    <p>Next</p>
                </div>
            </div>
        </div>
    )
}

export default SongControls
