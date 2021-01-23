import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Albums from "./components/Albums";
import Header from "./components/Header";
import Artist from './components/Artist';
import './App.css';

function App() {
  const [topHits, setTopHits] = useState([]);

  useEffect(() => {
    const getTopHits = async () => {
      const resp = await axios.get(baseURL, config);
      setTopHits(resp.data.records)
    };
    getTopHits()
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Header/>
        <Albums topHits={topHits}/>
      </Route>
      <Route path="/albums/:singer">
        <Artist topHits={topHits}/>
      </Route>
    </div>
  );
}

export default App;
