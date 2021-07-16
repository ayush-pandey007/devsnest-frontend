import React, { useState, useEffect } from "react";
import Meme from "./Components/Meme";
import "./App.css";
import MemeClicked from "./Components/MemeClicked";

function App() {
  const [meme, setMeme] = useState([]);
  const [edit, setEdit] = useState(false);
  const [activeMeme, setActiveMeme] = useState({});
  function handleClick(memeIndex) {
    setEdit(true);
    setActiveMeme(meme[memeIndex]);
  }
  function memefunc(meme) {
    setMeme(meme);
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.memes);
        setMeme(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {edit ? (
        <>
          {
            <MemeClicked
              {...activeMeme}
              meme={meme}
              setActiveMeme={setActiveMeme}
              setEdit={setEdit}
            />
          }
        </>
      ) : (
        <div className="meme_cards">
          {meme.map((val, idx) => (
            <Meme key={val.id} {...val} handleClick={handleClick} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
