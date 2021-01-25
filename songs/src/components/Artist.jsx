import { useParams } from "react-router-dom";
//import ReactPlayer from "reactplayer";

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
      <div className="artist">
        <img className="header" src="https://wwwimage-secure.cbsstatic.com/base/files/blog/2020-grammy-awards-nominees-promo.jpg" alt="grammy award" />
        {/* <ReactPlayer contorls url={topHits.fields.youtube}/> */}
          <img className="artistAlbum1" src={topHits.fields.picture} alt={topHits.fields.singer} />
          <h1> {topHits.fields.singer}</h1>
        <div className="artist2">
          <h2> Song: {topHits.fields.song}</h2>
          <h2>Weeks at number one: {topHits.fields.top}</h2>
          <h2>Date released: {topHits.fields.date}</h2>
        </div>
      </div>
    )
  }
}

export default Artist;