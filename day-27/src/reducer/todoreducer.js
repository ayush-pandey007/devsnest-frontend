const todoReducer = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  }
  if (action.type === "REMOVE_ITEM") {
    return state.filter((_, index) => index !== action.payload);
  }
  if (action.type === "LOAD_TODO") {
    return [...state, ...action.payload];
  }
  return state;
};
export default todoReducer;
