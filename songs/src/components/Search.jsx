import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Search(props) {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const filteredSingers = props.source.filter((item) =>
    item.fields.singer.toLowerCase().includes(name.toLowerCase())
  );

console.log(filteredSingers)

  return (
    
    <form className="search">

      <input
        Value={name}
        onChange={(e) => setName(e.target.value)} />
      {name &&
      <div>{name  && filteredSingers.map((item) => <p>{item.fields.singer}</p>)}</div>
      }
    </form>
  );
}

export default Search;