import React from 'react';
import './Cards.css';
function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button>
          <a>View More</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
