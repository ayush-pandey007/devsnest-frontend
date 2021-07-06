import React from 'react';
import './style.css';
import Card from './Components/Card';

export default function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Card
          title="Emma Watson"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipgwga9WG7yeEhh-5CCdeyFfQUa9KyEp1NQ&usqp=CAU"
          body="Emma Charlotte Duerre Watson (born 15 April 1990)"
        />
      </div>
    </div>
  );
}
