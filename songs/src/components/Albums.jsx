import React from "react";
import { Link } from "react-router-dom";

function Albums(props) {
  return (
    <div>
      {props.topHits.map((topHit) => (
        <div id="album1" key={topHit.id}>
          <Link key={topHit.fields.singer} to={`/albums/${topHit.fields.singer}`}>
            <img id="album"  src={topHit.fields.album} alt={topHit.fields.singer} />
          </Link>
          <div>
            <h3>{topHit.fields.singer}</h3>
          </div>
        </div>
      ))};
    </div>
  );
}

export default Albums;