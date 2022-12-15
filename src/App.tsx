import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Inputs from "./components/inputs";
import axios from "axios";
import MainComponent from "./components/main";

function App() {
  const [light, setLight] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      <Header light={light} setLight={setLight} />
      <Inputs light={light} setLight={setLight} data={data} />
      <MainComponent light={light} setLight={setLight} data={data} />
    </div>
  );
}

export default App;
