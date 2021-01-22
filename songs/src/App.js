import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Albums from "./components/Albums";
//import Artist from './components/Artist';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const resp = await axios.get(baseURL, config);
      setSongs(resp.data.records)
    };
    getSongs()
  }, []);

  return (
    <div className="App">
      <Route path="/">
         <Albums songs={songs}/>
      </Route>
    </div>
  );
}

export default App;
