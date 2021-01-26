import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from "../services";

function Form(props) {
  const [singer, setSinger] = useState("")
  const [picture, setPicture] = useState("")
  const [album, setAlbum] = useState("")
  const [song, setSong] = useState("")
  const [youtube, setYoutube] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      singer,
      picture,
      song,
      album,
      youtube,
    }
      
        await axios.post(baseURL, {fields}, config);
        props.setToggle((prev) => !prev)
      };


  return (
    <form className="createPage" onSubmit={handleSubmit}>
      <h2>Create a song</h2>
      <label htmlFor="singer">Singer's Name: </label>
      <input
        type="text"
        name="name"
        value={singer}
        onChange={(e) => setSinger(e.target.value)}
      />
      <label htmlFor="picture"> Singers Photo: </label>
      <input
        name="text"
        value={picture}
        onChange={(e)=>setPicture(e.target.value)}
      />
      <label htmlFor="album">Album Picture: </label>
      <input
        type="text"
        name="album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />
      <label htmlFor="Song">Song Name: </label>
      <input
        type="text"
        name="album"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <label htmlFor="chorus">Music Video: </label>
      <input
        name="text"
        value={youtube}
        onChange={(e)=>setYoutube(e.target.value)}
      />
      <button className="submitSong"type="submit">Submit</button>
    </form>
  )
}

export default Form;