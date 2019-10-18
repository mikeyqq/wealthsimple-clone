import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import apiUrl from "./services/hackerNewsApi";

function App() {
  const [newStory, setStory] = useState("This line should change to retrieved API data id after 2 seconds");
  Axios.get(apiUrl).then(({ data }) =>
    setTimeout(() => {
      setStory(data);
    }, 2000)
  );

  return (
    <div className="App">
      <header>
        <h1>Wealthsimple Clone</h1>
        <p>{newStory}</p>
      </header>
    </div>
  );
}

export default App;
