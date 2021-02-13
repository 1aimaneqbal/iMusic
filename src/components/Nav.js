import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
const Nav = ({libraryUpdater,setLibraryUpdater}) => {
    const libraryHandler = () => {
        setLibraryUpdater(!libraryUpdater)
    }
    return (
        <nav>
            <h1>iMusic</h1>
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
