import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Search from './components/Search';
import Albums from "./components/Albums";
import Header from "./components/Header";
import Artist from './components/Artist';
import Form from "./components/Form";
import Nav from "./components/Nav";
import './App.css';

function App() {
  const [topHits, setTopHits] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getTopHits = async () => {
      const resp = await axios.get(baseURL, config);
      setTopHits(resp.data.records)
    };
    getTopHits()
  }, [toggle])

  return (
    <div className="App">
        
      <Route exact path="/">
        <Nav/>
        <Header />
        <Search source={topHits}/>
        <Albums topHits={topHits}/>
      </Route>
      <Route path="/new">
        <Nav/>
        <Header />
        <Form toggle={toggle} setToggle={setToggle}/>
      </Route>
      <Route path="/albums/:id">
        <Nav/>
        <Header/>
        <Artist topHits={topHits}/>
      </Route>
    </div>
  )
}

export default App;
