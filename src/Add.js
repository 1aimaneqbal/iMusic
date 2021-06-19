import React, {useState} from 'react'
import axios from 'axios'

const Add = ({addSongsPane}) => {
    const [name, setName] = useState('')
    const [cover, setCover] = useState('')
    const [artist, setArtist] = useState('')
    const [audio, setAudio] = useState('')
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [lang, setLang] = useState('')
    const [pass, setPass] = useState('')

    const onNameChange = (e) =>{
        setName(e.target.value)
    }

    const onCoverChange = (e) =>{
        setCover(e.target.value)
    }

    const onArtistChange = (e) =>{
        setArtist(e.target.value)
    }

    const onAudioChange = (e) =>{
        setAudio(e.target.value)
    }

    const onColor1Change = (e) =>{
        setColor1(e.target.value)
    }

    const onColor2Change = (e) =>{
        setColor2(e.target.value)
    }

    const onLangChange = (e) =>{
        setLang(e.target.value)
    }

    const onPassChange = (e) =>{
        setPass(e.target.value)
    }

    const submitSong = async (e) =>{
        e.preventDefault()
        const color = [color1, color2]
        const data = {
            name, cover, artist, audio, color, lang
        }
        if(pass==="Qwerty@21"){
            await axios.post('http://localhost:3001/', data)
            alert("Song Added to DB")
            setName('')
            setCover('')
            setArtist('')
            setAudio('')
            setColor1('')
            setColor2('')
            setPass('')
        }
        else{
            alert("You are not authenticated to add Songs.")
            setName('')
            setCover('')
            setArtist('')
            setAudio('')
            setColor1('')
            setColor2('')
            setPass('')
        }
    }
    return (
        <div className={`container ${addSongsPane? 'containerShow':''}`} >
            <h2>Add Songs</h2>
            <form>
                <div className="inputBox">
                    <input type="text" name="pass" required="required" onChange={onPassChange} value={pass} />
                    <label>Password</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="name" required="required" onChange={onNameChange} value={name}/>
                    <label>Song Name</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="cover" required="required" onChange={onCoverChange} value={cover}/>
                    <label>Cover Image</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="artist" required="required" onChange={onArtistChange} value={artist} />
                    <label>Artist Name</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="audio" required="required" onChange={onAudioChange} value={audio} />
                    <label>Audio Link</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="color1" required="required" onChange={onColor1Change} value={color1} />
                    <label>Primary Color</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="color2" required="required" onChange={onColor2Change} value={color2} />
                    <label>Secondary Color</label>
                </div>
                <div className="selBox">
                    <label>Select language: </label>
                    <select name="lang" id="currsem" className="select" onChange={onLangChange} >
                        <option value="en">English</option>
                        <option value="jp">Japanese</option>
                    </select>
                </div>
                <input type="submit" value="Push to DB" onClick={submitSong}/>
            </form>
        </div>
    )
}

export default Add
