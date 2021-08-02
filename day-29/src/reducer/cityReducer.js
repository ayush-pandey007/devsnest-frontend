export const cityReducer = (state = {}, action) => {
  if (action.type === "ADD_CITY") {
    return action.payload;
  }
  return state;
};
