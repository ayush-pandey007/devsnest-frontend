export const cityReducer = (state = "Delhi", action) => {
  if (action.type === "ADD_CITY") {
    return action.payload;
  }
  return state;
};
