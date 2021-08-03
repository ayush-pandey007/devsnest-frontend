import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCity, updateData } from "./action/action";

const InputField = () => {
  const place = useSelector((state) => state.city);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={place}
        required
        onChange={(e) => dispatch(updateCity(e.target.value))}
      />
      <button type="button" onClick={() => dispatch(updateData(place))}>
        Show
      </button>
    </div>
  );
};

export default InputField;
