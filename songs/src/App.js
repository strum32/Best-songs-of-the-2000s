import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Search from './components/Search';
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
        <Search source={topHits}/>
        <Albums topHits={topHits}/>
      </Route>
      <Route path="/new">
        <h2>This is the form</h2>
      </Route>
      <Route path="/albums/:singer">
        {/* <Artist artists={topHits}/> */}
      </Route>
    </div>
  );
}

export default App;
