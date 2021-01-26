import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from "../services";

function Form(props) {
  const [singer, setSinger] = useState("")
  const [song, setSong] = useState("")
  const [album, setAlbum] = useState("")
  const [youtube, setYoutube] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      singer,
      song,
      album,
      youtube,
    }
      
        await axios.post(baseURL, {fields}, config);
        props.setToggle((prev) => !prev)
      };


  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a song</h3>
      <label htmlFor="name">Singer: </label>
      <input
        type="text"
        name="name"
        value={singer}
        onChange={(e) => setSinger(e.target.value)}
        />
      <label htmlFor="song">Song title: </label>
      <input
        type="text"
        name="song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <label htmlFor="genre">Album Picture: </label>
      <input
        type="text"
        name="album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />
      <label htmlFor="chorus">Main Chorus: </label>
      <textarea
        name="text"
        value={youtube}
        onChange={(e)=>setYoutube(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;