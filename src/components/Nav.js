import React from 'react'
import { UilCloudUpload, UilMusic } from '@iconscout/react-unicons'

const Nav = ({libraryUpdater,setLibraryUpdater, addSongsPane, setAddSongsPane}) => {
    const libraryHandler = () => {
        setLibraryUpdater(!libraryUpdater)
    }
    const addSongHandler = () => {
        setAddSongsPane(!addSongsPane)
    }
    return (
        <nav>
            <h1>iMusic</h1>
            <div className="btn">
                <button onClick={addSongHandler}>
                    <UilCloudUpload />
                </button>
                <button onClick={libraryHandler}>
                    <UilMusic />
                </button>
            </div>
        </nav>
    )
}

export default Nav
