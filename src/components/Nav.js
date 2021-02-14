import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
const Nav = ({libraryUpdater,setLibraryUpdater, currSong}) => {
    const libraryHandler = () => {
        setLibraryUpdater(!libraryUpdater)
    }
    const navheadercolor = {
        color: currSong.color[1]
    }
    return (
        <nav>
            <h1 style={navheadercolor}>iMusic</h1>
            <button onClick={libraryHandler} className={libraryUpdater ? 'btnTranslate' : ''}>
                {libraryUpdater ? 
                <FontAwesomeIcon icon={faTimesCircle}/>
                :
                <FontAwesomeIcon icon={faMusic}/>
            }
            </button>
        </nav>
    )
}

export default Nav
