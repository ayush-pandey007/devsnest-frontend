import React from 'react';
import './Box.css';
function Box({ bgColor }) {
  console.log(bgColor);
  return (
    <div
      className="box"
      style={{ backgroundColor: bgColor == 0 ? 'white' : 'black' }}
    />
  );
}

export default Box;
