import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";


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
      <div id="artist1">
          <ReactPlayer id="artistVideo"
            height="446px"
            controls
            url={topHits.fields.youtube}
          />
          <img className="artistAlbum1" src={topHits.fields.picture} alt={topHits.fields.singer} />
      <div>
          <h2 className="singer"> {topHits.fields.singer}</h2>
        </div>
        <div id="artist2">
          <h2> Song: {topHits.fields.song}</h2>
        </div>
      </div>
    )
  }
}

export default Artist;