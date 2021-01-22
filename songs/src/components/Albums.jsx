import React from "react";
import { Link } from "react-router-dom";

function Albums(props) {
  return (
    <div>
      {props.topHits.map((topHit) => (
        <div key={topHit.id}>
          <Link key={topHit.fields.singer} to={`/album/${topHit.fields.singer}`}>
            <img src={topHit.fields.album} alt={topHit.fields.singer} />
          </Link>
        </div>
      ))};
    </div>
  );
}

export default Albums;