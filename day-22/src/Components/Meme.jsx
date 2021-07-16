import React from "react";
import "./Meme.css";
function Meme({ id, url, name, handleClick, index }) {
  return (
    <div className="meme_card" onClick={() => handleClick(index)}>
      <img src={url} alt={name} />
    </div>
  );
}

export default Meme;
