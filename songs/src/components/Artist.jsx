import React from 'react';
import { useParams } from "react-router-dom";

function Artist(props) {
  const params = useParams()

  const topHit = props.topHits.find((topHit) => {
    return topHit.fields.singer === params.fields.singer
  })

  return (
    <div>
      <h1>test</h1>
      <img src={topHit.fields.picture} alt={topHit.fields.singer} />
      <h2>{topHit.fields.singer}</h2>
      <h2>{topHit.fields.song}</h2>
      <h3>{topHit.fields.topHit}</h3>
    </div>
  )
}

export default Artist;