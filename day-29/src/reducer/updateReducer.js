export const updateReducer = (state = "Delhi", action) => {
  if (action.type === "UPDATE_DATA") {
    return action.payload;
  }
  return state;
};
