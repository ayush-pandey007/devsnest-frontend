import React, { useEffect, useState } from "react";

function Cards({ food, cal, idx, index, handleDelete, handeleEdit }) {
  const [userInput, setUserInput] = useState({ loft: food, coft: cal });
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {edit ? (
        <>
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
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button
            onClick={() => {
              console.log(userInput);
              handeleEdit(index, userInput.loft, userInput.coft);
              setEdit(false);
            }}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <h1>{food}</h1>
          <p>you have consumed {cal} calories</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => handleDelete(index)}>delete</button>
        </>
      )}
    </div>
  );
}

export default Cards;
