import React, { useState } from "react";
import "./MemeCLicked.css";
function MemeClicked({
  url,
  id,
  box_count,
  name,
  setEdit,
  setActiveMeme,
  meme,
}) {
  const [form, setForm] = useState({
    template_id: id,
    username: "Perjada4474",
    password: "Elonmusk24roc",
    boxes: [],
  });
  const genrateMemes = () => {
    let url2 = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, idx) => {
      url2 += `&boxes[${idx}][text]=${box.text}`;
    });
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setActiveMeme({ ...meme, url: data.data.url });
      });
  };
  return (
    <>
      <div className="meme_clicked">
        <img src={url} alt={name} />
        <form action="">
          <div className="input_field">
            {[...Array(box_count)].map((val, idx) => {
              return (
                <input
                  type="text"
                  key={idx}
                  onChange={(e) => {
                    const newBoxes = form.boxes;
                    newBoxes[idx] = { text: e.target.value };
                    setForm({ ...form, boxes: newBoxes });
                  }}
                />
              );
            })}
          </div>
          <div className="btn">
            <button
              onClick={(e) => {
                e.preventDefault();
                return genrateMemes();
              }}
            >
              Create meme
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              Choose Template
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MemeClicked;
