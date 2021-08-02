export const dataReducer = (state = {}, action) => {
  if (action.type === "UPDATE-WEATHER") {
    return action.payload;
  }
  return state;
};
