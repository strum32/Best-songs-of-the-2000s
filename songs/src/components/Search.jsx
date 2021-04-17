// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// function Search(props) {
//   const [name, setName] = useState('');
//   const [search, setSearch] = useState('')

//   useEffect(() => {
//     setName(localStorage.getItem("name") || "");
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("name", name);
//   }, [name]);

//   const handleSubmit = ((e) => {
//     e.preventDefualt()
//     setSearch(name)
//   })

//   const filteredSingers = props.source.filter((item) => {
//     item.fields.singer.toLowerCase().includes(name.toLowerCase())
//   })
  
//   // const filteredSingers = props.source.filter((item) =>
//   //   item.fields.singer.toLowerCase().includes(name.toLowerCase())
//   // );

//   // console.log(filteredSingers)

//   return (
//     <div>
//     <form className="search" onSubmit={handleSubmit}>

//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)} />
//     </form>
//       {name &&
//       <div >{filteredSingers.map((item) => {
//         return (
//         <div id="album1">
//         <Link key={item.fields.singer} to={`/albums/${item.id}`}>
//           <img id="album"  src={item.fields.album} alt={item.fields.singer} />
//         </Link>
//         <h3>{item.fields.singer}</h3>
//       </div>)})}</div>}
//           </div>
//   );
// }

// export default Search;