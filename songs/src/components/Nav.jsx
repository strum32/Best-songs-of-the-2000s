import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <nav>
      <Link className="homeB" to="/">Home</Link>
      <Link className="createB" to="/new">Create a Song</Link>
    </nav>
  )
}

export default Nav;