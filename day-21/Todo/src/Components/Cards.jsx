import React, { useEffect, useState } from "react";
import "./Cards.css";
function Cards({ food, cal, idx, index, handleDelete, handeleEdit }) {
  const [userInput, setUserInput] = useState({ loft: food, coft: cal });
  const [edit, setEdit] = useState(false);
  return (
    <div className="main">
      {edit ? (
        <div className="card2">
          <form action="">
            <div className="input-field">
              <input
                type="text"
                placeholder="Edit item"
                required
                onChange={(e) =>
                  setUserInput({ ...userInput, loft: e.target.value })
                }
              />
              <input
                type="Number"
                placeholder="edit calories"
                required
                onChange={(e) =>
                  setUserInput({ ...userInput, coft: e.target.value })
                }
              />
            </div>
            <button className="edit" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button
              className="del"
              onClick={() => {
                console.log(userInput);
                handeleEdit(index, userInput.loft, userInput.coft);
                setEdit(false);
              }}
            >
              Done
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="card">
            <h1>{food}</h1>
            <p>you have consumed {cal} calories</p>
            <button className="edit" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className="del" onClick={() => handleDelete(index)}>
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;
