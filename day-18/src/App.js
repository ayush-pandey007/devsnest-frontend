import React from "react";
import "./style.css";
import Row from "./Components/Row";
export default function App() {
  return (
    <div>
      
        <div className="board">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <Row
                odd={{
                  odd: item % 2 == 0,
                }}
              />
            );
          })}
        </div>

    </div>
  );
}
