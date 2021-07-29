const intialState = { name: "", email: "" };

export const userReducer = (state = intialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return { ...state, name: action.payload };
  }
  if (action.type === "UPDATE_EMAIL") {
    return { ...state, email: action.payload };
  }
  return state;
};
