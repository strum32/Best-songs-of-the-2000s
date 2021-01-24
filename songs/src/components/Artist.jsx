import { useParams } from "react-router-dom";

function Artist(props) {
  const params = useParams()

  const topHits = props.topHits.find((topHit) => {
    return topHit.id === params.id
  })
  console.log(topHits)

  if (!topHits) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <img src={topHits.fields.picture} alt={topHits.fields.singer} />
        <h2>{topHits.fields.singer}</h2>
        <h2>{topHits.fields.song}</h2>
        <h3>{topHits.fields.top}</h3>
        <h3>{topHits.fields.date}</h3>
      </div>
    )
  }
}

export default Artist;