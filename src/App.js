import React, { useEffect, useState } from "react";
import { getStories } from "./services/hackerNewsApi";
import "./App.css";

function App() {
  const [newStories, setStories] = useState("This line should change to retrieved API data id after 2 seconds");

  useEffect(() => {
    getStories().then(data =>
      setTimeout(() => {
        setStories(data);
      }, 2000)
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Wealthsimple Clone</h1>
        <p>{newStories}</p>
      </header>
    </div>
  );
}

export default App;
