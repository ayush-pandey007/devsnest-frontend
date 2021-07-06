import './style.css';
import React from 'react';
import Chessboard from './Components/Chessboard';

export default function App() {
  return (
    <div className="container">
      <section className="section2">
        <Chessboard />
      </section>
    </div>
  );
}
