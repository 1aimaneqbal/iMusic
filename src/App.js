import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Main from './Main'
const App = () => {
    const [fetchedSongs, setFetchedSongs] = useState()
    useEffect(()=>{
        fetchSongsFromAPI()
    },[])
    const fetchSongsFromAPI = async () =>{
        try {
            const fetch = await axios.get("https://imusic-rest-api.herokuapp.com/")
            setFetchedSongs(fetch.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        {
            fetchedSongs &&(

                <Main fetchedSongs={fetchedSongs}/>
            )
        }
        </>
    )
}

export default App
